<template>
  <div class="cart">
    <b-dropdown
      class="cart-icon"
      variant="link"
      no-caret
      right
      @show="queryCartProductList"
    >
      <template #button-content>
        <b-icon
          title="购物车"
          variant="secondary"
          icon="cart-fill"
          font-scale="2"
        ></b-icon>
      </template>

      <span v-for="(item, index) in data" :key="item.productId || index">
        <b-dropdown-item>
          <div class="cart-item">
            <div class="cart-item-left">
              <auth-img
                class="cart-item-left-img"
                :authSrc="'/api/product/product/viewProductImage/' + item.productImage"
              ></auth-img>
            </div>
            <div class="cart-item-middle">
              <div class="cart-item-middle-name">{{ item.productName }}</div>
              <div class="cart-item-middle-price">
                {{ item.productPrice }}<span> x {{ item.nums }}</span>
              </div>
            </div>
            <div class="cart-item-right">
              <div class="cart-item-right-delete">
                <b-icon icon="dash-circle-fill" font-scale="0.85" @click="delCartProduct(item)"></b-icon>
              </div>
            </div>
          </div>
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
      </span>

      <b-dropdown-item>
        <b-button>结算</b-button>
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
    };
  },
  mounted() {},
  methods: {
    queryCartProductList() {
      this.$getRequest('/user/cart/queryCartProductList').then((res) => {
        this.data = res.data.result;
      });
    },
    delCartProduct(item) {
      this.$deleteRequest('/user/cart/delCartProduct', item).then(res => {
        if (res.data.result) {
          this.$bvToast.toast(item.productName + '已成功移出购物车', {
            title: '提示',
            variant: 'success',
            autoHideDelay: 3000,
          });
          // refresh list
          this.queryCartProductList();
        }
      })
    }
  },
};
</script>

<style lang="less">
.cart-icon {
  margin: -0.375rem -0.75rem;
}

.cart-item {
  display: flex;
  margin: 10px 0;

  &-left {
    &-img {
      width: 60px;
    }
  }

  &-middle {
    margin: 0 10px;
    &-name {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 600;
    }
    &-price {
      color: #333;
    }
  }

  &-right {
    display: flex;
    margin: auto;
  }
}
</style>
