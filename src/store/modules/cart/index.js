import {defineStore} from "pinia";
import {computed, ref} from "vue";
import axios from "@/services/axios";
import useLocalStore from "@/helpers/useLocalStore";
import {useAuthStore} from "@/store/modules/auth";


export const useCartStore = defineStore('auth', () => {
	const remoteCart = ref([]);
  const { getFromLocalStore, setToLocal } = useLocalStore();
  const { userIsAuth } = useAuthStore();
  const localeCart = computed(() => JSON.parse(getFromLocalStore({name: 'locale_cart'}) || '') || []);

  const cart = computed(() => [...remoteCart, localeCart]);

  const secureToken = computed(() => getFromLocalStore({name: 'auth_secure_token'}));
  async function addToCart({ id }) {
    if(userIsAuth) {
      try {
        const response = axios.patch( '/user/cart', { id },  {
          headers: {
            Authorization: 'Bearer ' + secureToken.value
          }})
        console.log('Response add cart', response)
      } catch (e) {
        console.log('Помилка додавання до кошика ')
      }

    } else {
      setToLocal({ name: 'locale_card', value: JSON.stringify([...localeCart.value, id]) })
    }
  }

  async function deleteFromCart({ id }) {
    const response = axios.delete('/user/cart', { id })
    console.log('Видалення з кошика", response);
  }

	return {
		cart,
    addToCart,
    deleteFromCart
	}
});
