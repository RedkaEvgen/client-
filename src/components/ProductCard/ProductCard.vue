<template>
    <v-card
        class="mx-auto pa-2"
        max-width="400"
        to="/product/12"
    >
        <v-img
            class="align-end text-white"
            height="200"
            src="https://dovidka.biz.ua/wp-content/uploads/2022/08/opys-olivtsya-870x400.jpg"
            cover
        >
        </v-img>

        <v-card-title>Олівець </v-card-title>
        <v-card-subtitle class="pt-4">
            Ціна: 30 грн
        </v-card-subtitle>

        <v-card-text>
            <div>Відмінний олівець для школи та офісу</div>
        </v-card-text>

        <v-card-actions>
            <v-row>
                <v-col cols="6">
                    <v-btn variant="elevated" block color="success" @click="handlerBuy">
                        Купити
                    </v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn variant="outlined" block color="deep-purple-accent-4" to="/product">
                        Переглянути
                    </v-btn>
                </v-col>
            </v-row>


        </v-card-actions>
    </v-card>
</template>

<script setup>


const handlerBuy = () => {

}
</script>

<style scoped>

</style>
