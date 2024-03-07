<template>
  <div class="product-detail">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="4">
          <div class="product-detail-title">
            <h2>{{ productDetail.productName }}</h2>
          </div>
          <hr />
          <div class="product-detail-info-box">
            <span><strong>Price</strong></span>
            <span class="product-detail-price">
              <span v-if="productDetail.productDiscountPrice">
                $ {{ productDetail.productDiscountPrice }}
                <small>$ {{ productDetail.productPrice }}</small>
              </span>
              <span v-else>$ {{ productDetail.productPrice }}</span>
            </span>
          </div>
          <hr />
          <div v-for="(item, index) in productDetail.productAttrs" :key="index">
            <div class="product-detail-info-box">
              <span><strong>{{ item.productAttrName }}</strong></span>
              <span v-if="item.widget === 1">
                <b-radio-group :options="item.productAttrValues">
                </b-radio-group>
              </span>
              <span v-if="item.widget === 2">
                <color-picker :colors="item.productAttrValues"></color-picker>
              </span>
              <span v-if="item.widget === 3">
                <size-picker :size="item.productAttrValues"></size-picker>
              </span>        
            </div>
            <hr />
          </div>
          <div class="product-detail-info-box">
            <span><strong>Quantity</strong></span>
            <span>
              <b-row>
                <b-col cols="6">
                  <b-input-group :append="productDetail.productUnit">
                    <b-input type="number"></b-input>
                  </b-input-group>
                </b-col>
              </b-row>
            </span>
          </div>
          <hr />
          <div class="product-detail-info-box">
            <b-button variant="danger" @click="addOrder">Buy Now</b-button>
            <b-button variant="warning">Add Cart</b-button>
          </div>
        </b-col>
        <b-col cols="5">
          <b-carousel
            fade
            controls
            background="#ababab"
            img-width="500"
            img-height="500"
          >
            <b-carousel-slide
              v-for="(item, index) in productDetail.images"
              :key="index"
            >
              <template #img>
                <auth-img
                  class="product-detail-img"
                  :authSrc="'/api/product/product/viewProductImage/' + item"
                ></auth-img>
              </template>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ColorPicker from '_c/color-picker';
import SizePicker from '_c/size-picker';
import AuthImg from '_c/auth-img';
export default {
  name: 'ProductDetail',
  components: {
    ColorPicker,
    SizePicker,
    AuthImg,
  },
  data() {
    return {
      productDetail: {},
    };
  },
  created() {
    this.queryProductDetail();
  },
  methods: {
    queryProductDetail() {
      this.$getRequest('/product/product/queryProductById', {
        productId: this.$route.query.productId,
      }).then((res) => {
        this.productDetail = res.data.result;
      });
    },
    addOrder() {
      this.$router.push('./order');
    },
  },
};
</script>

<style lang="less" scoped>
.product-detail {
  margin-top: 20px;
  .product-detail-price small {
    text-decoration: line-through;
    font-size: 80%;
    margin-left: 10px;
  }
  .product-detail-info-box {
    margin-bottom: 2px;
    padding: 2px 0;
    display: table;
    width: 100%;
  }
  .product-detail-info-box > span {
    display: table-cell;
    vertical-align: middle;
    text-align: left;
    font-size: 15px;
  }
  .product-detail-info-box > span:first-child {
    width: 35%;
  }
  .product-detail-info-box > span:last-child {
    width: 65%;
  }
  .product-detail-info-box:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .product-detail-info-box > .btn {
    float: right;
    margin-right: 20px;
  }
}
</style>
