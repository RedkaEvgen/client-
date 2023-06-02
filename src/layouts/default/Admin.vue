<template>
    <v-toolbar color="primary" height="56" class="px-5">
        <v-container>
            <v-row>
                <v-col v-if="route.name !== 'AdminProducts'" cols="auto">
                  <v-btn to="/admin/products" color="#FFFFFF" variant="text" prepend-icon="mdi-chevron-left" stacked></v-btn>
                </v-col>
                <v-col cols="auto" class="align-self-center">Адмін панель</v-col>
                <v-col cols="auto" class="align-self-center flex-grow-1 text-end">{{ email }}</v-col>
            </v-row>
        </v-container>
    </v-toolbar>
    <router-view></router-view>
</template>

<script setup>

import {useAuthStore} from "@/store/modules/auth";
import {useRoute} from "vue-router";
import {computed} from "vue";
import {storeToRefs} from "pinia";
const userStore = useAuthStore();

const { user } = storeToRefs(userStore);
const route = useRoute()

const email = computed(() => user.value?.email || '')


</script>
