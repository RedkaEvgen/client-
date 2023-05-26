<template>
    <v-card
        class="mx-auto pa-2"
        max-width="400"
        to="/product/12"
    >
        <v-img
            class="align-end text-white"
            height="200"
            :src="image"
            type="image/jpg"
            cover
            :alt="title"
        >
        </v-img>

        <v-card-title> {{ title }} </v-card-title>
        <v-card-subtitle class="pt-4">
            Ціна: {{ price }} грн
        </v-card-subtitle>

        <v-card-text>
            <div>{{ text }}</div>
        </v-card-text>

        <v-card-actions>
            <v-row>
                <v-col cols="6">
                    <v-btn variant="elevated" block color="success" @click="handlerBuy">
                        Купити
                    </v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn variant="outlined" block color="deep-purple-accent-4" to="/product/12">
                        Переглянути
                    </v-btn>
                </v-col>
            </v-row>


        </v-card-actions>
    </v-card>
</template>

<script setup>

import {computed} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: () => [],
  },
  imageUrl: {
    type: String,
    default: ''
  }
})

const image = computed(() =>props.imageUrl || "http://localhost:4444/uploads/products/skeleton.jpeg")
const handlerBuy = () => {

}
</script>

<style scoped>

</style>
