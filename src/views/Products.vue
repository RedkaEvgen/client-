<template>
  <v-container>
    <v-row>
      <v-col cols="12">
       <div class="text-h4 mb-6"> Товари по категоріям </div>
      </v-col>
    </v-row>

    <ProductGroupByTag
      :products="allProducts"
      tag="home"
    />

    <ProductGroupByTag
      :products="allProducts"
      tag="office"
    />

    <ProductGroupByTag
      :products="allProducts"
      tag="school"
    />

  </v-container>
</template>

<script setup>
import ProductCard from "@/components/ProductCard/ProductCard.vue";
import {useProductsStore} from "@/store/modules/products";
import ProductGroupByTag from "@/components/ProductGroupByTag/ProductGroupByTag.vue";

const {allProducts} = useProductsStore()
</script>
