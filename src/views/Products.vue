<template>
  <v-container>
      <v-row no-gutters>
          <v-col cols="12" class="mb-8">
              <h4 class="text-h6 mb-5">Для школи</h4>

              <v-row>
                  <v-col v-for="item of 3" cols="4">
                      <ProductCard />
                  </v-col>
              </v-row>
          </v-col>

          <v-col cols="12" class="mb-8">
              <h4 class="text-h6 mb-5">Для офісу</h4>
              <v-row>
                  <v-col v-for="item of 3" cols="4">
                      <ProductCard />
                  </v-col>
              </v-row>
          </v-col>

          <v-col cols="12" class="mb-8">
              <h4 class="text-h6 mb-5">Для маленьких дітей</h4>
              <v-row>
                  <v-col v-for="item of products" cols="4">
                      <ProductCard />
                  </v-col>
              </v-row>
          </v-col>

          <v-col cols="12" class="mb-8">
              <h4 class="text-h6 mb-5">Для професіоналів</h4>
              <v-row>
                  <v-col v-for="item in allProducts" cols="4">
                      <ProductCard
                        :title="item.title"
                        :text="item.text"
                        :price="item.price"
                        :tags="item.tags"
                        :imageUrl="item.imageUrl"
                      />
                  </v-col>
              </v-row>
          </v-col>
      </v-row>
  </v-container>
</template>

<script setup>
import ProductCard from "@/components/ProductCard/ProductCard.vue";
import {useProductsStore} from "@/store/modules/products";

const { allProducts } = useProductsStore()
</script>
