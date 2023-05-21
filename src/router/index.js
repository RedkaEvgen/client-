import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'main',
        name: 'Main',
        component: () => import(/* webpackChunkName: "main" */ '@/views/Main.vue'),
      },
      {
        path: 'products',
        name: 'ProductsPage',
        component: () => import(/* webpackChunkName: "products-page" */ '@/views/Products.vue'),
      },
      {
        path: 'product/:id',
        name: 'ProductPage',
        component: () => import(/* webpackChunkName: "product-page" */ '@/views/Product.vue'),
      },
      {
        path: 'login',
        name: 'LoginPage',
        component: () => import(/* webpackChunkName: "login-page" */ '@/views/Login.vue'),
      },
      {
        path: 'register',
        name: 'RegisterPage',
        component: () => import(/* webpackChunkName: "register-page" */ '@/views/Registration.vue'),
      },{
        path: 'cart',
        name: 'CartPage',
        component: () => import(/* webpackChunkName: "cart-page" */ '@/views/Cart.vue'),
      },
      {
        path: 'admin/',
        component: () => import('@/layouts/default/Admin.vue'),
        children: [
          {
            path: 'products',
            name: 'AdminProducts',
            component: () => import(/* webpackChunkName: "admin-products" */ '@/views/AdminProducts.vue'),
          },
          {
            path: 'products/:id',
            name: 'AdminProduct',
            component: () => import(/* webpackChunkName: "admin-product" */ '@/views/AdminProduct.vue'),
          },
        ]
      }
    ],

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
