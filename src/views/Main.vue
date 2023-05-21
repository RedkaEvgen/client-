<template>
    <v-container class="my-10 ">
        <v-row no-gutters>
            <v-col cols="12">
                <h4 class="text-h4">Найкращій магазин канцтоварів!</h4>
            </v-col>
        </v-row>
    </v-container>
    <div class="my-10">
        <swiper
            :navigation="true" :modules="modules" class="mySwiper"
        >
            <swiper-slide
                v-for="banner of banners"
                :key="banner.id"
                :style="{ height: '300px' }"
            >
                <v-img :src="banner.src"
                       cover
                />
            </swiper-slide>
        </swiper>
    </div>


    <v-container>
        <v-row no-gutters>
            <v-col cols="12">
                <h4 class="text-h6 mb-5">Топ</h4>
                <v-row>
                    <v-col v-for="item of 3" cols="4">
                        <ProductCard />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-row no-gutters>
            <v-col cols="12">
                <h4 class="text-h6 mb-5">Сезонні знижки</h4>
                <v-row>
                    <v-col v-for="item of 3" cols="4">
                        <ProductCard />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from "@/components/ProductCard/ProductCard.vue";

const modules = [Navigation];

const banners = [
    {
        id: 1,
        src: 'https://klike.net/uploads/posts/2022-12/1672124005_3-12.jpg',
    },
    {
        id: 2,
        src: 'https://klike.net/uploads/posts/2022-12/1672123930_3-27.jpg',
    },
    {
        id: 3,
        src: 'https://klike.net/uploads/posts/2022-12/1672124021_3-20.jpg',
    },
    {
        id: 4,
        src: 'https://klike.net/uploads/posts/2022-12/1672124010_3-19.jpg',
    },
    {
        id: 5,
        src: 'https://klike.net/uploads/posts/2022-12/1672123980_3-31.jpg',
    }
]
</script>

<style scoped>
.swiper {
    max-width: 100%
}
</style>
