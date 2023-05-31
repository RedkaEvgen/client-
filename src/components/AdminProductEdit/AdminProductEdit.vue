<template>
  <ProductForm v-if="productData"
                @formSubmit="submit"
               :title="productData?.title"
               :text="productData?.text"
               :price="productData?.price"
               :tags="productData?.tags"
               :imageUrl="productData?.imageUrl"
  >
    <template #title>
      <v-col offset="1" cols="10"><h4 class="text-h4 mb-8"> Редагування товару</h4></v-col>
    </template>
    <template #buttons>
      <v-col offset="1" cols="10"  class="mt-3">
        <v-btn class="mr-10" variant="elevated" color="success" type="submit">
          Зберегти
        </v-btn>
        <v-btn variant="outlined" color="red" @click="deleteItem">
          Видалити
        </v-btn>
      </v-col>
    </template>
  </ProductForm>
</template>

<script setup>
import ProductForm from "@/components/ProductForm/ProductForm.vue";
import {onMounted, ref} from "vue";
import {useProductsStore} from "@/store/modules/products";
import {useRouter, useRoute} from "vue-router";
import {useAdminStore} from "@/store/modules/admin";

const route = useRoute();
const router = useRouter()
const { getProduct } = useProductsStore()

const productData = ref(null);

onMounted(async () => {
  const id = route.params.id;
  productData.value = await getProduct(id);
});

const productStore = useProductsStore();
const { updateProduct, deleteProduct } = useAdminStore();
const submit = async ( data ) => {
  console.log("{ id: productData.value._id, data }", { id: productData.value._id, ...data })
  await updateProduct({ data: { _id: productData.value._id, ...data }});
  router.push({ name: 'AdminProducts' })
}

const deleteItem = async (id) => {
  if(!productData.value?.id) return;
  try {
    await deleteProduct({ id: productData.value?.id });
    await productStore.deleteProductById(id);
    await router.push({ name: 'AdminProducts'})
  } catch (e) {
    console.error('Помилка видалення')
  }
}

</script>

<style scoped>

</style>
