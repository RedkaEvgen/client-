<template>
    <v-form>
        <v-container class="fill-height">
           <v-row no-gutters>
               <v-col cols="12" class="mb-5">
                   <h4 class="text-h4"> Кошик </h4>
               </v-col>
               <template v-if="cartItems.length">
                   <v-col cols="12">
                       <CartOrderTable :products="cartItems"/>
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
import {computed} from "vue";
import {useProductsStore} from "@/store/modules/products";
import {useAuthStore} from "@/store/modules/auth";
import {storeToRefs} from "pinia";

const productStore = useProductsStore();
const { allProducts } = storeToRefs(productStore)

const userStore = useAuthStore();
const { user } = storeToRefs(userStore);

const userCartProducts = computed(() => Object.values(user.value.cart).reduce((acc, el) => {

  acc[el.productId] = el;

  return acc
}, { }) || [])


const cartItems = computed(() =>
  allProducts.value.reduce((acc, el ) => {
    if(Object.keys(userCartProducts.value).includes(el._id) ) {
      acc.push({ ...el, count: userCartProducts.value[el._id].count })
    }

    return acc
  }, [])
)

</script>
