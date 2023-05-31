<template>
    <v-toolbar color="primary" height="56" class="px-5">
        <v-container>
            <v-row>
                <v-col v-if="route.name !== 'AdminProducts'"  offset="1" cols="1">
                  <v-btn to="/admin/products" color="#FFFFFF" variant="text" prepend-icon="mdi-chevron-left" stacked></v-btn>
                </v-col>
                <v-col cols="5" class="align-self-center">Адмін панель</v-col>
                <v-col cols="4" class="align-self-center text-end">{{ '' }}</v-col>
            </v-row>
        </v-container>
    </v-toolbar>
    <router-view></router-view>
</template>

<script setup>

import {useAuthStore} from "@/store/modules/auth";
import {useRoute} from "vue-router";
const { user } = useAuthStore();
const route = useRoute()


</script>
