<template>
    <v-row no-gutters>
        <v-col cols="12" class="mb-4">
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
                    v-for="(item, index) in props.products"
                    :key="item.name"
                    class="py-2"
                >
                    <td> {{ index + 1 }}.</td>
                    <td> <v-img :src="item.img" class="py-1" height="80px" cover aspect-ratio="16/9"/> </td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td class="text-center">
                        <v-btn to="products/12" icon="mdi-pencil" variant="text" class="text-blue-accent-4 mr-2" title="Edit"></v-btn>
                        <v-btn icon="mdi-delete" variant="text" class="text-red" title="Delete"></v-btn>
                    </td>
                </tr>
                </tbody>
            </v-table>
        </v-col>
        <v-col cols="12"> <v-btn color="success" to="products/create"> Створити новий продукт </v-btn> </v-col>
    </v-row>
</template>

<script setup>

const props = defineProps({
	products: {
		type: Array,
		required: true
	}
})
</script>

<style scoped>

</style>
