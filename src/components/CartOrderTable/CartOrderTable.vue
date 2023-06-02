<template>
    <v-row no-gutters>
        <v-col cols="12" class="mb-3">
            <div class="text-h6">Данні про товари</div>
        </v-col>
    </v-row>
    <v-row no-gutters>
        <v-col cols="12" class="mb-4">
            <v-table
                fixed-header
            >
                <thead>
                <tr>
                    <th></th>
                    <th class="text-left">
                        Назва товару
                    </th>
                    <th class="text-left">
                        Кількість
                    </th>
                    <th class="text-left">
                        Ціна
                    </th>
                    <th class="text-right">
                        Загальна сума
                    </th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="(item, index) in props.products"
                    :key="item.name"
                >
                    <td> {{ index + 1 }}. </td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.count }}</td>
                    <td>{{ item.price }}</td>
                    <td class="text-right">{{ totalPrice(item.price, item.count) }}</td>
                    <td>
                        <v-btn icon="mdi-delete" variant="text" class="text-red" title="Delete" @click="deleteHandler(item._id)">
                        </v-btn>
                    </td>
                </tr>
                </tbody>
            </v-table>
        </v-col>
    </v-row>
</template>
<script setup>

import {useCartStore} from "@/store/modules/cart";

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
});

const { deleteFromCart } = useCartStore()

const totalPrice = ( price, count ) => {
    return (parseInt(price)) * count + ' грн'
}

const deleteHandler = (id) => {
  deleteFromCart({ id })
}

</script>


<style scoped>

</style>
