<template>
    <v-layout :style="{height: '100%'}">
        <v-navigation-drawer
            class="full-height"
            :rail="rail"
            permanent
            @click="rail = false"
        >
            <v-list-item
                v-if="userIsAuth"
                prepend-avatar="https://randomuser.me/api/portraits/men/62.jpg"
                :title="user.fullName"
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
                <v-list-item to="/cart" prepend-icon="mdi-cart" value="cart" title="Кошик (1)"></v-list-item>
                <v-list-item v-if="!userIsAuth" to="/login" prepend-icon="mdi-login-variant" title="Вхід/Регестрація" value="login" ></v-list-item>
                <v-list-item v-if="userIsAuth" prepend-icon="mdi-login-variant" title="Вийти" value="logout" @click="authStore.logout"></v-list-item>
                <v-list-item v-if="isAdmin" to="/admin/products" prepend-icon="mdi-pencil-box" title="Адмін Панель" value="admin"></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <slot></slot>
    </v-layout>
</template>

<script setup>

import {ref} from "vue";
import {useAuthStore} from "@/store/modules/auth";
import {storeToRefs} from "pinia";

const rail = ref(false)

const authStore = useAuthStore();

const { user, userIsAuth, isAdmin } = storeToRefs(authStore);

</script>
