<template>
    <v-col cols="12" className="mb-8">
      <h4 className="text-h6 pl-3 mb-5">{{ tagTitle }}</h4>
      <v-row>
        <v-col v-for="item of productsByTag" cols="4">
          <ProductCard
            :id="item._id"
            :title="item.title"
            :text="item.text"
            :price="item.price"
            :tags="item.tags"
            :imageUrl="item.imageUrl"/>
        </v-col>
      </v-row>
    </v-col>
</template>

<script setup>
import {computed} from "vue";
import ProductCard from "@/components/ProductCard/ProductCard.vue";

  const tagsTitles = {
    home: 'Для дому',
    office: 'Для офісу',
    school: 'Для школи'
  };

  const tagTitle = computed(() => props.title || tagsTitles[props.tag] ||'Все') ;

  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    products: {
      type: Array,
      default: () => []
    },
    tag: {
      type: String,
      required: ''
    }
  });

  const productsByTag = computed(() => props.products.filter((el) => el.tags.includes(props.tag)))

</script>

<style scoped>

</style>
