<template>
  <v-form v-model="valid" @submit.prevent="submit">
    <v-container class="fill-height">
      <v-row no-gutters>
        <slot name="title"></slot>
        <v-col offset="1" cols="10">
          <v-row>
            <v-col cols="12">
              <v-img v-if="imageUrl" :src="imageUrl" class="mb-5" aspect-ratio="4/3" height="300"/>
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
                            v-model="title"
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
                            suffix=" грн"
                            required
              ></v-text-field>
              <v-textarea class="mb-3"
                          color="deep-purple-accent-4"
                          v-model="text"
                          label="Опис товару"
                          variant="outlined"
                          type="number"
                          required
              ></v-textarea>
              <v-select
                label="Категорія"
                v-model="tags"
                :items="['office', 'school', 'home']"
                multiple
                required
              ></v-select>
            </v-col>
          </v-row>

        </v-col>
        <slot name="buttons"></slot>

      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import {computed, ref} from "vue";


const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
  },
  imageUrl: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['formSubmit']);

const valid = ref(false);
const title = ref(props.title);
const price = ref(props.price);
const text = ref(props.text);
const tags = ref(props.tags);

const formIsValid = computed(() => title.value && price.value && price.value && text.value && tags.value.length);

const img = ref([])
const imgRules = [
  value => {
    return !value || !value.length || value[0].size < 5000000 || 'Фото товару не повинно перевищувати 5 MB!'
  },
];

const submit = () => {
  if(!valid.value && formIsValid.value) return;

  const data = {
    title: title.value,
    text: text.value,
    price: Number(price.value),
    tags: tags.value,
    img: img.value[0] || []
  }

  emit('formSubmit', data);
}
</script>

<style scoped>

</style>
