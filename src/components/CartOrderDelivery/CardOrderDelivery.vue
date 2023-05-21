<template>
    <v-row no-gutters>
        <v-col cols="12" class="mb-3">
            <div class="text-h6">Данні для доставки</div>
        </v-col>
    </v-row>
    <v-row no-gutters>
        <v-col cols="12">
            <v-text-field class="mb-5"
                          color="deep-purple-accent-4"
                          v-model="name"
                          label="Імʼя"
                          placeholder="Тарас"
                          variant="outlined"
                          type="text"
                          required
            ></v-text-field>

        </v-col>
        <v-col cols="12">
            <v-text-field class="mb-5"
                          color="deep-purple-accent-4"
                          v-model="lastName"
                          label="Прізвище"
                          placeholder="Шевченко"
                          variant="outlined"
                          type="text"
                          required
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field class="mb-5"
                          color="deep-purple-accent-4"
                          v-model="lastName"
                          label="Телефон"
                          placeholder="+380-95-099-99-99"
                          variant="outlined"
                          type="text"
                          required
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-autocomplete
                clearable
                label="Місто"
                v-model="city"
                :items="['Київ', 'Одеса', 'Харків', 'Львів', 'Маріуполь', 'Севастополь']"
                required
            ></v-autocomplete>
        </v-col>
        <v-col cols="12">
            <v-autocomplete
                clearable
                label="Відділення"
                v-model="department"
                :items="['Відділення Перемога (1)', 'Відділення Зброя(2)', 'Відділення Літаки(3)', 'Відділення Герої(4)']"
                required
            ></v-autocomplete>
        </v-col>
    </v-row>
</template>

<script setup>
  import {ref} from "vue";

  const name = ref('');
  const lastName = ref('');
	const city = ref('');
	const department = ref('')
</script>

<style scoped>

</style>
