<template>
  <EditProductForm @formSubmit="submit">
    <template #buttons>
      <v-col cols="12"  class="mt-3">
        <v-btn class="mr-10" variant="elevated" color="success" type="submit" >
          Зберегти
        </v-btn>
        <v-btn variant="outlined" color="red">
          Видалити
        </v-btn>
      </v-col>
    </template>
  </EditProductForm>
</template>

<script setup>
import EditProductForm from "@/components/EditProductForm/EditProductForm.vue";
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

const submit = () => {

}

</script>

<style scoped>

</style>
