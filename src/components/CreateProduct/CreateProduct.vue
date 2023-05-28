<template>
  <ProductForm @formSubmit="submit">
    <template #title>
      <v-col offset="1" cols="10"><h4 class="text-h4 mb-8"> Створення нового товару</h4></v-col>
    </template>
    <template #buttons>
      <v-col offset="1" cols="10"  class="mt-3">
        <v-btn class="mr-10" variant="elevated" color="success" type="submit" >
          Створити
        </v-btn>
      </v-col>
    </template>
  </ProductForm>
</template>

<script setup>
import ProductForm from "@/components/ProductForm/ProductForm.vue";
import {useProductsStore} from "@/store/modules/products";
import {useRoute} from "vue-router";
import {ref} from "vue";
import {useAdminStore} from "@/store/modules/admin";

const route = useRoute();
const { getProduct } = useProductsStore();
const { createProduct } = useAdminStore();


const productData = ref(null);


const submit = (data) => {
  console.log("CREATE PRODUCT", data);
  createProduct({ data })
  // push new Product
  // get new Products
  // go to products -
};
</script>

<style scoped>

</style>
