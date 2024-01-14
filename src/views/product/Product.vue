<template>
  <div class="product">
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from './components/ProductList';
export default {
  name: 'Product',
  components: {
    ProductList,
  },
};
</script>

<style lang="less" scoped>
</style>