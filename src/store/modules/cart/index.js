import {defineStore} from "pinia";
import {computed, ref} from "vue";
import axios from "@/services/axios";
import useLocalStore from "@/helpers/useLocalStore";


export const useCartStore = defineStore('auth', () => {
	const cart = ref([]);
  const { getFromLocalStore } = useLocalStore();

  const secureToken = computed(() => getFromLocalStore({name: 'auth_secure_token'}));
  async function addToCart({ id }) {
    const response = axios.patch( '/user/cart', { id },  {
      headers: {
        Authorization: 'Bearer ' + secureToken.value
      }})
    console.log('Response add cart', response)
  }

  async function deleteFromCart({ id }) {
    const response = axios.delete('/user/cart', { id })
    console.log('Response add cart', response)
  }

	return {
		cart,
    addToCart,
    deleteFromCart
	}
});
