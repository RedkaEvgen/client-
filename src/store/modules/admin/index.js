import {defineStore} from "pinia";
import axios from "axios";
import useLocalStore from "@/helpers/useLocalStore";
import {computed} from "vue";


export const useAdminStore = defineStore('admin', () => {
  const { getFromLocalStore } = useLocalStore();
  const secureToken = computed(() => getFromLocalStore({name: 'auth_secure_token'}));
  async function createProduct({ data }) {
    try {
      const response = await axios.post('/products', { data },{
        headers: {
          Authorization: 'Bearer ' + secureToken.value
        }
      })
      return 'Продукт додано';
    } catch (e) {
      console.log('Помилка створення продукту')
    }
  }

  async function deleteProduct ({ id }) {
    try {
      const response = await axios.patch(`/products/${id}`, {}, {
        headers: {
          Authorization: 'Bearer ' + secureToken.value
        }
      })
      console.log("Видалено успішно", response);
      return 'Видалено'
    } catch (e) {
      console.log('Помилка видалення продукту')
    }
  }

  async function updateProduct ({ data }) {
    try {
      const {id} = data;
      const response = await axios.patch(`/products/${id}`, data,{
        headers: {
          Authorization: 'Bearer ' + secureToken.value
        }
      })
      console.log("Зміненно успішно", response);
      return 'Змінено'
    } catch(e) {
      console.log('Помилка змінення продукту');

    }

  }
})


