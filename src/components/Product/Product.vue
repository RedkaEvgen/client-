<template>
  <v-container>
      <v-row class="mt-10">
          <v-col cols="5">
              <v-img src="https://totobi.com.ua/images/thumbnails/500/470/detailed/3/cce671c2-c783-11e6-80c2-000c295c9c78_aa2adac8-9147-11e7-80c9-000c295c9c78..jpg" />
          </v-col>
          <v-col cols="7">
            <h5 class="text-h5 mb-5 font-weight-black text-decoration-underline">Ручка звичайна</h5>
            <div class="text-body-2 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, at autem cumque deleniti dolore dolorem earum eos esse eveniet exercitationem explicabo facere facilis impedit libero magni minus nesciunt quaerat qui quia sint sunt tempore ut. Accusamus ad aperiam, culpa dicta laudantium numquam qui voluptatem. Debitis et impedit nulla odio optio quibusdam, totam. Aperiam, consectetur corporis deleniti, doloremque ea expedita ipsa iste possimus quasi quia suscipit totam vitae. Animi aut commodi consequatur consequuntur cum cumque dolorum eveniet excepturi expedita, id inventore ipsa, iste itaque, iure labore laboriosam magni minima modi molestias numquam odit officiis omnis pariatur quae quaerat quam quos soluta!
            </div>
            <div class="mb-5">
                <span >
                    Ціна:
                </span>
                <span>
                    30 грн
                </span>
            </div>
            <div>
                <v-select
                    v-model="count"
                    class="mb-8"
                    label="Кількість"
                    :items="[1, 2, 3, 4, 5, 6]"
                ></v-select>
            </div>
            <div>
                <v-btn width="250" variant="elevated" color="success" @click="buy">
                    Купити
                </v-btn>
            </div>
          </v-col>
      </v-row>
  </v-container>
</template>

<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

const count = ref(1);

const buy = () => {
	console.log('Купив', route.params.id)
}
</script>

<style scoped>

</style>
