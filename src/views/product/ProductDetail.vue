<template>
  <div class="product-detail">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="4">
          <div class="product-detail-title">
            <h2>Mellany Sofa</h2>
          </div>
          <div class="product-detail-price">
            <span>
              $ 1999,00
              <small>$ 2999,00</small>
            </span>
          </div>
          <hr />
          <div class="product-detail-info-box">
            <span><strong>Maifacturer</strong></span>
            <span>Brand Name</span>
          </div>
          <hr />
          <div class="product-detail-info-box">
            <span><strong>Materials</strong></span>
            <span>Wood, Leather, Acrylic</span>
          </div>
          <hr />
          <div class="product-detail-info-box">
            <span><strong>Available Colors</strong></span>
            <color-picker></color-picker>
          </div>
          <hr />
          <div class="product-detail-info-box">
            <span><strong>Choose Size</strong></span>
            <size-picker></size-picker>
          </div>
          <hr />
          <div class="product-detail-info-box">
            <span><strong>Quantity</strong></span>
            <span>
              <b-row>
                <b-col cols="6">
                  <b-input type="number"></b-input>
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
        <b-col cols="6">
          <b-carousel fade controls img-width="730" img-height="530">
            <b-carousel-slide img-src="@/assets/product-8.jpg">
            </b-carousel-slide>
            <b-carousel-slide img-src="@/assets/product-10.jpg">
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
export default {
  name: 'ProductDetail',
  components: {
    ColorPicker,
    SizePicker,
  },
  created() {
    console.log('产品ID', this.$route.params);
  },
  methods: {
    queryProductDetail() {
      this.$getRequest('/product/product/queryProductById', {product: this.$route.params.productId}).then(res => {
        
      })
    },
    addOrder() {
      this.$router.push('./order')
    }
  }
};
</script>

<style lang="less" scoped>
.product-detail {
  margin-top: 20px;
  .product-detail-price {
    font-size: 20px;
  }
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
    font-size: 13px;
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
