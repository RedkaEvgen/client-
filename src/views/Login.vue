<template>
    <v-form v-model="valid">
        <v-container class="h-100">
            <v-row
                class="h-100"
                align="center"
                justify="center"
            >
                <v-col class="h-100" cols="5">
                    <h4 class="text-h4 mt-10 mb-5"> Вхід </h4>
                    <v-text-field class="mb-2"
                                  color="deep-purple-accent-4"
                                  v-model="email"
                                  label="Email"
                                  :rules="emailRules"
                                  placeholder="your-email@domen.com"
                                  variant="outlined"
                                  type="email"
                                  required
                    ></v-text-field>
                    <v-text-field class="mb-5"
                                  color="deep-purple-accent-4"
                                  v-model="password"
                                  label="Password"
                                  placeholder="secret-password@domen.com"
                                  variant="outlined"
                                  type="password"
                                  required
                    ></v-text-field>
                    <v-btn
                        class="mb-5"
                        color="success"
                        type="submit"
                        block
                        text="Ввійти"
                    ></v-btn>
                    <v-btn
                        to="/register"
                        type="button"
                        variant="outlined"
                        block
                        class="mt-2"
                        text="Зареєструватися"
                    ></v-btn>
                </v-col>

            </v-row>
        </v-container>
    </v-form>
</template>

<script setup>
import {ref} from "vue";

const valid = ref(false);
const email = ref('');
const password = ref('');

const emailRules = [
    value => {
        if (value) return true

        return 'E-mail обовязкове поле.'
    },
    value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail не вірний.'
    },
];

const login = () => {
    // ToDo: Fetch Login
    console.lg('Login')
}

</script>
