<template>
  <div class="order">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="4">
          <div class="order-block">
            <h4>Order Details</h4>
            <hr />
            <b-row>
              <b-col cols="6" class="order-info">
                <strong>Order No.</strong>
                <div>123456789</div>
              </b-col>
              <b-col cols="6" class="order-info">
                <strong>Transaction ID</strong>
                <div>8*********6</div>
              </b-col>
              <b-col cols="6" class="order-info">
                <strong>Order Date</strong>
                <div>
                  2023/12/31
                </div>
              </b-col>
              <b-col cols="6" class="order-info">
                <strong>Arrival Date</strong>
                <div>2024/01/01</div>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="order-block">
            <h4>Choose Payment</h4>
            <hr />
            <b-row>
              <span class="checkbox">
                <input
                  type="radio"
                  id="paymentID1"
                  name="paymentOption"
                  checked="checked"
                />
                <label for="paymentID1">
                  <strong>Pay via credit cart</strong> <br />
                  <small
                    >(MasterCard, Maestro, Visa, Visa Electron, JCB and American
                    Express)</small
                  >
                </label>
              </span>
              <span class="checkbox">
                <input type="radio" id="paymentID2" name="paymentOption" />
                <label for="paymentID2">
                  <strong>PayPal</strong> <br />
                  <small
                    >Purchase with your fingertips. Look for us the next time
                    you're paying from a mobile app, and checkout faster on
                    thousands of mobile websites.</small
                  >
                </label>
              </span>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="4">
          <div class="order-block">
            <h4>Shipping Info</h4>
            <hr />
            <b-row>
              <b-col cols="6" class="order-info">
                <strong>Name</strong>
                <div>姓名</div>
              </b-col>
              <b-col cols="6" class="order-info">
                <strong>Tel</strong>
                <div>1*********9</div>
              </b-col>
              <b-col cols="6" class="order-info">
                <strong>City</strong>
                <div>
                  北京市 通州区 永顺镇
                </div>
              </b-col>
              <b-col cols="6" class="order-info">
                <strong>Address</strong>
                <div>西潞苑小区**楼**单元**室</div>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="order-block">
            <h4>Discount Way</h4>
            <hr />
            <b-row> </b-row>
          </div>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="8">
          <div class="order-block">
            <h4>Product Info</h4>
            <hr />

            <div class="order-product order-product-header">
              <div><span>Product</span></div>
              <div><span>&nbsp;</span></div>
              <div><span>Quantity</span></div>
              <div class="text-right"><span>Price</span></div>
            </div>
            <div class="order-product order-product-context">
              <div class="order-product-context-image">
                <img src="@/assets/item-1.jpg" />
              </div>
              <div class="order-product-context-title">
                <h4>Coffee machine</h4>
                <div>Electronics</div>
              </div>
              <div class="order-product-context-quantity">
                <strong>1</strong>
              </div>
              <div class="order-product-context-price">
                <span class="final h3">$ 150,00</span>
                <span class="discount">$ 190,00</span>
              </div>
              <!--delete-this-item-->
              <span class="order-icon-delete">
                <b-icon icon="x" font-scale="1.5"></b-icon>
              </span>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Order',
  created() {
    this.addOrder();
  },
  methods: {
    addOrder() {
      this.$getRequest('/order/order/addOrder').then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.order-block {
  margin-bottom: 20px;
  position: relative;
}
.order-info {
  padding: 10px 15px;
}
.order-info > div {
  margin-top: 5px;
}
.order-product {
  position: relative;
}
.order-product {
  display: table;
  padding: 15px;
  width: 100%;
}
.order-product > div {
  display: table-cell;
  padding: 0;
  vertical-align: middle;
}
.order-product > div:nth-child(1) {
  width: 15%;
}
.order-product > div:nth-child(2) {
  width: 45%;
}
.order-product > div:nth-child(3) {
  width: 10%;
}
.order-product > div:nth-child(4) {
  width: 30%;
}
.order-product-context {
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
}
.order-product-context-image {
  padding: 0;
}
.order-product-context-image > img {
  width: 100%;
}
.order-product-context-title > * {
  margin: 0;
}
.order-product-context-price > span {
  display: block;
  text-align: right;
  padding-right: 10px;
}
.order-product-context-price .final {
  margin: 0;
}
.order-product-context-price .discount {
  text-decoration: line-through;
}
.order-icon-delete {
  position: absolute;
  cursor: pointer;
  padding: 5px;
  right: 0;
  top: 0;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.order-icon-delete:hover {
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
</style>
