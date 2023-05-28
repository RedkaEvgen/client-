<template>
  <ProductForm @formSubmit="submit">
    <template #title>
      <v-col offset="1" cols="10"><h4 class="text-h4 mb-8"> Редагування товару</h4></v-col>
    </template>
    <template #buttons>
      <v-col offset="1" cols="10"  class="mt-3">
        <v-btn class="mr-10" variant="elevated" color="success" type="submit">
          Зберегти
        </v-btn>
        <v-btn variant="outlined" color="red">
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
import {useRoute} from "vue-router";

const route = useRoute();
const { getProduct } = useProductsStore()

const productData = ref(null);

onMounted(async () => {
  const id = route.params.id;
  productData.value = getProduct(id);

  console.log('ProductData', productData)
})

const submit = (data) => {
  console.log("CHANGE PRODUCT", data);
}

</script>

<style scoped>

</style>
