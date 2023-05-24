import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useProductsStore = defineStore('auth', () => {
	const products = ref([]);


	return {
		products,
	}
});
