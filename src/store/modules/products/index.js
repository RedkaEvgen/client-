import {defineStore} from "pinia";
import {computed, ref} from "vue";
import axios from "@/services/axios";

export const useProductsStore = defineStore('products', () => {
	const products = ref([]);

  const allProducts = computed(() => products.value)

  async function getProduct(id) {
    try{
      return await axios.get(`/products/${id}`);
    } catch (e) {
      console.error('Помилка отримання продукту');
    }

  }

  async function getAllProducts () {
    try{
      const result = await axios.get(`/products/`);
      products.value = result.data;
      return result.data
    } catch (e) {
      console.log('Помилка отримання продуктів');
    }
  }

	return {
    allProducts,
    getProduct,
    getAllProducts
	}
});
