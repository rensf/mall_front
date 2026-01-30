<template>
  <div class="cart">
    <!-- <b-dropdown class="cart-icon" variant="link" right no-caret :auto-close="false">
      <template #button-content>
        <a-icon title="购物车" icon="cart-fill" font-scale="2" @click="queryCartProductList"></a-icon>
      </template>
      <span v-for="item in data">
        <b-dropdown-item>
          <div class="cart-item">
            <div class="cart-item-left">
              <auth-img class="cart-item-img" width="50" :authSrc="'/api/product/product/viewProductImage/' + item.productImage"></auth-img>
            </div>
            <div class="cart-item-body">
              <div class="cart-item-name">{{ item.productName }}</div>
              <div>
                {{ item.productPrice }}<span> x {{ item.nums }}</span>
              </div>
            </div>
            <div class="cart-item-right">
              <b-icon icon="x"></b-icon>
            </div>
          </div>
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
      </span>
      <b-dropdown-item>
        <b-button>结算</b-button>
      </b-dropdown-item>
    </b-dropdown> -->
  </div>
</template>

<script>
import AuthImg from '_c/auth-img';
export default {
  name: 'HomeCart',
  components: {
    AuthImg,
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    queryCartProductList() {
      this.$getRequest('/user/cart/queryCartProductList').then((res) => {
        this.data = res.data.result;
      });
    },
    deleteCartProduct(productId) {

    },
  },
};
</script>

<style lang="less">
.cart-icon {
  margin: -0.375rem -0.75rem;
}
.cart-item {
  display: flex;
  align-items: center;

  &-body {
    margin: 0 16px;
  }
}
</style>
