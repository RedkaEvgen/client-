<template>
    <v-row no-gutters>
        <v-col cols="12" class="mb-4">
            <div v-if="!allProducts.length" class="text-h4"> Нажаль адміністратор поки не додав продуктів </div>
            <v-table class="mb-5" fixed-header>
                <thead>
                <tr>
                    <th></th>
                    <th class="text-left">
                        Картинка
                    </th>
                    <th class="text-left">
                        Назва товару
                    </th>
                    <th class="text-left">
                        Ціна
                    </th>
                    <th class="text-center">
                        Дії
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="(item, index) in allProducts"
                    :key="item.name"
                    class="mb-3 py-2"
                >
                    <td> {{ index + 1 }}.</td>
                    <td> <v-img :src="item.imageUrl" class="py-1" height="80px" cover aspect-ratio="16/9"/> </td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.price }} грн</td>
                    <td class="text-center">
                        <v-btn :to="`products/${item._id}`" icon="mdi-pencil" variant="text" class="text-blue-accent-4 mr-2" title="Edit"></v-btn>
                        <v-btn icon="mdi-delete" variant="text" class="text-red" title="Delete" @click="deleteItem(item._id)"></v-btn>
                    </td>
                </tr>
                </tbody>
            </v-table>
        </v-col>
        <v-col cols="12"> <v-btn color="success" to="products/create"> Створити новий продукт </v-btn> </v-col>
    </v-row>
</template>

<script setup>

import {useAdminStore} from "@/store/modules/admin";
import {useProductsStore} from "@/store/modules/products";
import {storeToRefs} from "pinia";

const productStore = useProductsStore()

const { allProducts } = storeToRefs(productStore);


const { deleteProduct } = useAdminStore();

const deleteItem = async (id) => {
  try {
    await deleteProduct({ id });
    await productStore.deleteProductById(id);
  } catch (e) {
    console.error('Помилка видалення')
  }
}
</script>

<style scoped>

</style>
