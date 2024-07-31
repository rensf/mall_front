<template>
  <div class="cart">
    <b-dropdown class="cart-icon" variant="link" no-caret>
      <template #button-content>
        <b-icon title="购物车" right icon="cart-fill" font-scale="2"></b-icon>
      </template>
      <span v-for="item in data">
        <b-dropdown-item>
          item
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
export default {
  name: 'HomeCart',
  data() {
    return {
      data: [
        {
          productName: '产品A',
        },
        {
          productName: '产品B',
        },
      ],
    };
  },
};
</script>

<style lang="less">
.cart-icon {
  margin: -0.375rem -0.75rem;
}
</style>
