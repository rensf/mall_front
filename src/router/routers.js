export default [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/main/Main.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/Home.vue'),
      },
      {
        path: '/product',
        name: 'Product',
        component: () => import('@/views/product/Product.vue'),
      },
      {
        path: '/productDetail',
        name: 'ProductDetail',
        component: () => import('@/views/product/ProductDetail.vue'),
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import('@/views/order/Order.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
  },
];
