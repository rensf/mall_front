<template>
  <div class="cart">
    <b-dropdown class="cart-icon" variant="link" right no-caret>
      <template #button-content>
        <b-icon title="购物车" icon="cart-fill" font-scale="2"></b-icon>
      </template>
      <span v-for="item in data">
        <b-dropdown-item>
          <div class="cart-item">
            <div class="cart-item-left">
              <auth-img class="cart-item-img" width="50" :authSrc="'/api/product/product/viewProductImage/' + item.productImage"></auth-img>
            </div>
            <div class="cart-item-body">
              <div class="cart-item-name">{{ item.productName }}</div>
              <div>$15.0<span> x 3</span></div>
            </div>
            <div class="cart-item-right">
              <i class="fa fa-remove"></i>
            </div>
          </div>
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
      </span>
      <b-dropdown-item>
        <b-button>check out</b-button>
      </b-dropdown-item>
    </b-dropdown>
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
      isHovered: false,
    };
  },
  created() {
    this.queryCartProductList();
  },
  methods: {
    queryCartProductList() {
      this.$getRequest('/user/cart/queryCartProductList').then((res) => {
        this.data = res.data.result;
      });
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
