<template>
  <v-container>
    <v-row v-if="productData" class="mt-10">
      <v-col cols="5">
        <v-img :src="productData.imageUrl"/>
      </v-col>
      <v-col cols="7">
        <h5 class="text-h5 mb-5 font-weight-black text-decoration-underline">{{ productData.title }}</h5>
        <div class="text-sm-body-2 mb-5 font-weight-bold">
          Опис:
        </div>
        <div class="text-body-2 mb-5">
          {{ productData.text }}
        </div>
        <div class="mb-5">
                <span>
                    Ціна:
                </span>
          <span>
                    {{ productData.price }} грн
                </span>
        </div>
        <div>
          <v-select
            v-model="count"
            class="mb-8"
            label="Кількість"
            :items="[1, 2, 3, 4, 5, 6]"
          ></v-select>
        </div>
        <div>
          <v-btn width="250" variant="elevated" color="success" @click="buy">
            Купити
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12">
        <ProductGroupByTag
          title="Продукти з схожої категорії"
          :tag="productData.tags[0]"
          :products="allProducts"
         />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useProductsStore} from "@/store/modules/products";
import ProductGroupByTag from "@/components/ProductGroupByTag/ProductGroupByTag.vue";
import {storeToRefs} from "pinia";

const route = useRoute();

const count = ref(1);

const buy = () => {
  console.log('Купив', route.params.id)
}
const productsStore = useProductsStore()
const {getProduct} = productsStore;
const { allProducts } = storeToRefs(productsStore)

const productData = ref(null);

onMounted(async () => {
  const id = route.params.id;
  productData.value = await getProduct(id);
})
</script>

<style scoped>

</style>
