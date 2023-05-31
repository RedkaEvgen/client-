import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import axios from "@/services/axios";

export const useProductsStore = defineStore('products', () => {
	const state = reactive({
    products: []
  })

  const allProducts = computed(() => state.products)

  async function getProduct(id) {
    try{
      const response = await axios.get(`/products/${id}`)
      return await response.data;
    } catch (e) {
      console.error('Помилка отримання продукту');
    }

  }

  async function getAllProducts () {
    try{
      const result= await axios.get(`/products/`);
      state.products = [...result.data];
      return result.data;
    } catch (e) {
      console.log('Помилка отримання продуктів');
    }
  }

  function deleteProductById (id) {
    state.products = state.products.filter((el) => el._id !== id)
  }

	return {
    allProducts,
    getProduct,
    getAllProducts,
    deleteProductById
	}
});
