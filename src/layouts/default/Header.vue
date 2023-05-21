<template>
    <v-layout :style="{height: '100%'}">
        <v-navigation-drawer
            class="full-height"
            :rail="rail"
            permanent
            @click="rail = false"
        >
            <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/men/62.jpg"
                title="Evgen Redka"
                nav
            >
                <template v-slot:append>
                    <v-btn
                        variant="text"
                        icon="mdi-chevron-left"
                        @click.stop="rail = !rail"
                    ></v-btn>
                </template>
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item to="/main" prepend-icon="mdi-store" title="Головна" value="main"></v-list-item>
                <v-list-item to="/products" prepend-icon="mdi-list-box" title="Всі товари" value="products"></v-list-item>
                <v-list-item to="/login" prepend-icon="mdi-login-variant" title="Вхід/Регестрація" value="login" ></v-list-item>
                <v-list-item to="/cart" prepend-icon="mdi-cart" value="cart" title="Корзина (1)"></v-list-item>
                <v-list-item to="/admin/products" prepend-icon="mdi-pencil-box" title="Адмін Панель" value="admin"></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <slot></slot>
    </v-layout>
</template>

<script setup>

import {ref} from "vue";

const rail = ref(false)
</script>
