<template>
    <v-form>
        <v-container class="fill-height">
           <v-row no-gutters>
               <v-col cols="12" class="mb-5">
                   <h4 class="text-h4"> Кошик </h4>
               </v-col>
               <template v-if="cartProducts.length">
                   <v-col cols="12">
                       <CartOrderTable :products="cartProducts"/>
                   </v-col>
                   <v-col cols="12 mb-10">
                       <CartOrderDelivery />
                   </v-col>
                   <v-btn color="success"
                          type="submit"
                          variant="outlined"
                          text="Оформити замовлення">
                   </v-btn>
               </template>
               <EmptyCart v-else />
           </v-row>
        </v-container>
    </v-form>
</template>

<script setup>
import CartOrderTable from "@/components/CartOrderTable/CartOrderTable.vue";
import CartOrderDelivery from "@/components/CartOrderDelivery/CardOrderDelivery.vue";
import EmptyCart from "@/components/EmptyCart/EmptyCart.vue";
import {onMounted} from "vue";
import axios from "axios";

const cartProducts = [
    {
        name: 'Олівець',
        price: '30 грн',
        count: 4
    }
]

onMounted(async () => {
    // TODO Fetch to cart

    const products = await axios.get('http://localhost:4444/products');

    console.log('Products:', products)
})
</script>
