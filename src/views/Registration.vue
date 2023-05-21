<template>
    <v-form v-model="valid">
        <v-container class="fill-height">
            <v-row
                class="h-100"
                align="center"
                justify="center"
            >
                <v-col class="h-100" cols="5">
                    <h4 class="text-h4 mt-10 mb-5"> Регістрація </h4>
                    <v-text-field class="mb-3"
                                  color="deep-purple-accent-4"
                                  v-model="name"
                                  label="Імʼя"
                                  placeholder="Тарас"
                                  variant="outlined"
                                  type="text"
                                  required
                    ></v-text-field>
                    <v-text-field class="mb-3"
                                  color="deep-purple-accent-4"
                                  v-model="lastName"
                                  label="Прізвище"
                                  placeholder="Шевченко"
                                  variant="outlined"
                                  type="text"
                                  required
                    ></v-text-field>
                    <v-text-field class="mb-3"
                                  color="deep-purple-accent-4"
                                  v-model="email"
                                  label="Email"
                                  :rules="emailRules"
                                  placeholder="your-email@domen.com"
                                  variant="outlined"
                                  type="email"
                                  required
                    ></v-text-field>
                    <v-text-field class="mb-3"
                                  color="deep-purple-accent-4"
                                  v-model="password"
                                  label="Password"
                                  placeholder="secret-password@domen.com"
                                  variant="outlined"
                                  type="password"
                                  required
                                  :min="5"
                    ></v-text-field>
                    <v-file-input
                        class="mb-5"
                        color="deep-purple-accent-4"
                        v-model="avatar"
                        :rules="avatarRules"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Pick an avatar"
                        prepend-icon="mdi-camera"
                        label="Avatar"
                    ></v-file-input>
                    <v-btn
                        type="submit"
                        color="success"
                        block
                        class="mt-2 mb-5"
                        text="Зареєструватися"
                    ></v-btn>
                    <v-btn
                        to="/login"
                        variant="outlined"
                        block
                        class="mt-2"
                        text="Ввійти"
                    ></v-btn>
                </v-col>

            </v-row>
        </v-container>
    </v-form>
</template>

<script setup>
import {ref} from "vue";

const valid = ref(false);
const name = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const avatar = ref([]);


const emailRules = [
    value => {
        if (value) return true

        return 'E-mail обовязкове поле.'
    },
    value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail не правильний. Підберіть інший е-mail'
    },
    value => {
    if(value.length > 5) return true;

    return 'E-mail повинен бути більше 5 символів'
    }
];

const avatarRules = [
    value => {
        return !value || !value.length || value[0].size < 2000000 || 'Фото для аватара не повинно займати більше 2 MB!'
    },
];

const registeration = () => {
    // ToDo: Fetch registeration
    console.lg('registeration')
}

</script>
