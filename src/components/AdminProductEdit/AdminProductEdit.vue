<template>
    <v-form v-model="valid">
        <v-container class="fill-height">
            <v-row no-gutters>
                <v-col cols="12"><h4 class="text-h4 mb-8"> Редагування товару</h4></v-col>
                <v-col cols="12">
                    <v-row>
                        <v-col cols="10">
                            <v-file-input
                                class="mb-5"
                                color="deep-purple-accent-4"
                                v-model="img"
                                :rules="imgRules"
                                accept="image/png, image/jpeg, image/bmp"
                                placeholder="Нажміть для завантаження фото"
                                prepend-icon="mdi-camera"
                                label="Фото товару"
                            ></v-file-input>
                            <v-text-field class="mb-3"
                                          color="deep-purple-accent-4"
                                          v-model="name"
                                          label="Назва товару"
                                          variant="outlined"
                                          type="text"
                                          required
                            ></v-text-field>
                            <v-text-field class="mb-3"
                                          color="deep-purple-accent-4"
                                          v-model="price"
                                          label="Ціна товару"
                                          variant="outlined"
                                          type="number"
                                          required
                            ></v-text-field>
                            <v-textarea class="mb-3"
                                          color="deep-purple-accent-4"
                                          v-model="description"
                                          label="Опис товару"
                                          variant="outlined"
                                          type="number"
                                          required
                            ></v-textarea>
                        </v-col>
                    </v-row>

                </v-col>
                <v-col cols="12"  class="mt-3">
                    <v-btn class="mr-10" variant="elevated" color="success">
                        Зберегти
                    </v-btn>
                    <v-btn variant="outlined" color="red">
                        Видалити
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";


const route = useRoute()

onMounted(async () => {
    const id = route.params.id;
    const productData = await axios(`http://localhost:4444/products/${id}`);

    console.log('ProductData', productData)
})

const valid = ref(false);
const name = ref('');
const price = ref('');
const description = ref('');

const img = ref([])
const imgRules = [
	value => {
		return !value || !value.length || value[0].size < 5000000 || 'Фото товару не повинно перевищувати 5 MB!'
	},
];
</script>

<style scoped>

</style>
