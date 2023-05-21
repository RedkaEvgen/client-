<template>
  <v-container>
      <AdminProductsTable :products="allProducts"/>
  </v-container>
</template>

<script setup>
import {onMounted, ref} from "vue";
import AdminProductsTable from "@/components/AdminProductsTable/AdminProductsTable.vue";

const allProducts = ref([
	{
		id: 213,
    name: 'Дикий олівець чекає бекенд',
    img: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/133D9/production/_128490887_beaver_getty.jpg',
    price: '40 грн'
  },
	{
		id: 214,
		name: 'Дикий олівець чекає бекенд',
		img: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/133D9/production/_128490887_beaver_getty.jpg',
		price: '40 грн'
	},
	{
		id: 215,
		name: 'Дикий олівець чекає бекенд',
		img: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/133D9/production/_128490887_beaver_getty.jpg',
		price: '40 грн'
	},
	{
		id: 216,
		name: 'Дикий олівець чекає бекенд',
		img: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/133D9/production/_128490887_beaver_getty.jpg',
		price: '40 грн'
	}
])

onMounted(async() => {
	// TODO Fetch to All Product
})
</script>

<style scoped>

</style>
