<template>
    <v-card
        class="mx-auto d-flex flex-column pa-2"
        max-width="400"
        :to="`/product/${id}`"
        height="100%"
    >
        <v-img
            class="align-end text-white"
            height="200px"
            :src="image"
            type="image/jpg"
            contain
            :alt="title"
        >
        </v-img>

        <v-card-title class="flex-grow-1"> {{ title }} </v-card-title>
        <v-card-subtitle class="flex-grow-1 pt-4">
            Ціна: {{ price }} грн
        </v-card-subtitle>

        <v-card-text class="flex-grow-1">
            <div class="text-truncate">{{ text }}</div>
        </v-card-text>

        <v-card-actions>
            <v-row>
                <v-col cols="6">
                    <v-btn variant="elevated" type="button" block color="success" @click.prevent.stop="handlerBuy">
                        Купити
                    </v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn variant="outlined" block color="deep-purple-accent-4" :to="`/product/${id}`">
                        Переглянути
                    </v-btn>
                </v-col>
            </v-row>


        </v-card-actions>
    </v-card>
</template>

<script setup>

import {computed} from "vue";
import {useCartStore} from "@/store/modules/cart";

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  },
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

const  { addToCart }  = useCartStore()
const handlerBuy = async () => {
  try {
    const id = props.id;
    await addToCart({id})
  } catch (e) {
    console.error('Помилка додавання товару')
  }
}

// Додавання товару
// Delete product
// Change Quality


</script>

<style scoped>

</style>
