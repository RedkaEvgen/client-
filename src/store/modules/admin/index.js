import {defineStore} from "pinia";
import axios from "@/services/axios";
import useLocalStore from "@/helpers/useLocalStore";
import {computed} from "vue";


export const useAdminStore = defineStore('admin', () => {
  const { getFromLocalStore } = useLocalStore();
  const secureToken = computed(() => getFromLocalStore({name: 'auth_secure_token'}));
  async function createProduct({ data }) {
    const { img, ...textData } = data;
    const bodyFormData = new FormData();
    bodyFormData.append('data', JSON.stringify(textData));
    if(img) bodyFormData.append( 'image', img);
    try {
      const response = await axios.post('/products', bodyFormData,{
        headers: {
          Authorization: 'Bearer ' + secureToken.value,
          "Content-Type": 'multipart/form-data'
        }
      })

      return response;
    } catch (e) {
      console.log('Помилка створення продукту')
    }
  }

  async function deleteProduct ({ id }) {
    try {
      await axios.delete(`/products/${id}`, {
        headers: {
          Authorization: 'Bearer ' + secureToken.value
        }
      });
      return 'Видалено'
    } catch (e) {
      console.log('Помилка видалення продукту')
    }
  }

  async function updateProduct ({ data }) {
    try {
      console.log('Data', data)
      const { img, ...textData } = data;
      const bodyFormData = new FormData();
      bodyFormData.append('data', JSON.stringify(textData));
      if(img) bodyFormData.append( 'image', img);
      const response = await axios.post(`/products/${data._id}`, bodyFormData,{
        headers: {
          Authorization: 'Bearer ' + secureToken.value,
          "Content-Type": 'multipart/form-data'
        }
      })
      console.log("Зміненно успішно", response);
      return 'Змінено'
    } catch(e) {
      console.log('Помилка змінення продукту');

    }
  }

  return {
    createProduct,
    deleteProduct,
    updateProduct
  }
})


