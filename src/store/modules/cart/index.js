import {defineStore} from "pinia";
import {computed, ref} from "vue";
import axios from "@/services/axios";
import useLocalStore from "@/helpers/useLocalStore";
import {useAuthStore} from "@/store/modules/auth";


export const useCartStore = defineStore('cart', () => {
  const remoteCart = ref([]);
  const {getFromLocalStore, setToLocal} = useLocalStore();
  const {userIsAuth, } = useAuthStore();
  const { loginByToken } = useAuthStore();
  const localeCart = computed(() => JSON.parse(getFromLocalStore({name: 'locale_cart'}) || '') || []);

  const cart = computed(() => [...remoteCart, localeCart]);

  const secureToken = computed(() => getFromLocalStore({name: 'auth_secure_token'}));

  async function addToCart({id, count = 1}) {
    if (userIsAuth) {
      try {
        const response = await axios.post('/user/cart', {id, count}, {
          headers: {
            Authorization: 'Bearer ' + secureToken.value
          }
        })
        await loginByToken()
      } catch (e) {
        console.log('Помилка додавання до кошика ')
      }

    } else {
      setToLocal({name: 'locale_card', value: JSON.stringify([...localeCart.value, id])})
    }
  }

  async function deleteFromCart({id}) {
    try{
      const response = await axios.patch('/user/cart/deleteProduct', {id}, {
        headers: {
          Authorization: 'Bearer ' + secureToken.value
        }
      });
      await loginByToken()
      console.log('Видалення з кошика", response');
    } catch (e) {
      console.error('Помилка видалення');
    }

  }

  return {
    cart,
    addToCart,
    deleteFromCart
  }
});
