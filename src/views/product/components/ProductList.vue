<template>
  <div class="product-list">
    <div class="product-header">
      <b-breadcrumb :items="breadcrumbItem"></b-breadcrumb>
    </div>
    <div class="center">
      <b-container fluid>
        <b-row>
          <b-col cols="9">
            <div style="line-height: 38px;">
              <strong>{{ queryForm.total }}</strong> items
              <b-dropdown class="sort-btn" text="Sort By" size="sm" right>
                <b-dropdown-item>名称</b-dropdown-item>
              </b-dropdown>
            </div>
            <b-row>
              <b-col
                cols="12"
                v-for="item in productList"
                :key="item.productId"
              >
                <article>
                  <b-card no-body @click="toProductDetail(item.productId)">
                    <div class="action">
                      <span class="added-heart" @click.stop="collectProduct">
                        <b-icon icon="heart"></b-icon>
                      </span>
                    </div>
                    <b-row no-gutters>
                      <b-col md="3">
                        <auth-img
                          class="card-img"
                          :authSrc="
                            '/api/product/product/viewProductImage/' +
                              item.image
                          "
                        ></auth-img>
                      </b-col>
                      <b-col class="product-list-item" md="9">
                        <b-card-title>{{ item.productName }}</b-card-title>
                        <b-card-sub-title>
                          <div v-if="item.productDiscountPrice">
                            <sub>$ {{ item.productPrice }}</sub>
                            <sup>$ {{ item.productDiscountPrice }}</sup>
                          </div>
                          <div v-else>
                            <sup>$ {{ item.productPrice }}</sup>
                          </div>
                        </b-card-sub-title>
                        <b-card-text>{{ item.productDetail }}</b-card-text>
                      </b-col>
                    </b-row>
                    <b-button @click.stop="buyProduct"><b-icon icon="cart3"></b-icon></b-button>
                  </b-card>
                </article>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="3">
            筛选按钮
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import AuthImg from '_c/auth-img';
export default {
  components: {
    AuthImg,
  },
  data() {
    return {
      breadcrumbItem: [
        {
          text: 'home',
          href: '#',
        },
        {
          text: 'product',
          active: true,
        },
      ],
      options: [
        {
          value: 20,
          text: 20,
        },
        {
          value: 50,
          text: 50,
        },
        {
          value: 100,
          text: 100,
        },
      ],
      queryForm: {
        current: 1,
        total: 0,
        size: 10,
      },
      productList: [],
    };
  },
  created() {
    this.queryProductList();
  },
  methods: {
    queryProductList() {
      this.$getRequest(
        '/product/product/queryProductList',
        this.queryForm
      ).then((res) => {
        this.queryForm.total = res.data.result.total;
        this.productList = res.data.result.records;
      });
    },
    toProductDetail(productId) {
      this.$router.push({
        name: 'ProductDetail',
        query: {
          productId: productId
        }
      });
    },
    collectProduct() {

    },
    buyProduct() {
      
    }
  },
};
</script>

<style lang="less" scoped>
.product-header {
  .breadcrumb {
    background: unset;
    margin-bottom: unset;
  }
}
.sort-btn {
  float: right;
}
article {
  position: relative;
  transition: all 0.3s;
  overflow: hidden;
  border: 1px solid #f5f4ef;
  margin-top: 10px;
  margin-bottom: 10px;
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  .card {
    border: none;
    .card-img {
      display: table-cell;
      vertical-align: middle;
    }
    .product-list-item {
      margin: auto;
      padding: 0 100px 0 30px;
      .card-title {
        margin: 10px 0;
      }
      .card-subtitle {
        margin: 10px 0;
      }
      .card-text {
        margin: 10px 0;
      }
      .card-subtitle sub,
      .card-subtitle sup {
        bottom: auto;
        top: auto;
        display: inline-block;
        margin-right: 10px;
      }
      .card-subtitle sub {
        text-decoration: line-through;
        font-weight: 300;
      }
    }
    .btn {
      background: #e4e25f;
      position: absolute;
      overflow: hidden;
      color: white;
      bottom: 20px;
      right: 20px;
      border: 0;
      width: 60px;
      height: 60px;
      font-size: 20px;
      z-index: 9;
      -moz-border-radius: 100%;
      -webkit-border-radius: 100%;
      border-radius: 100%;
    }
    .btn {
      opacity: 0;
      -moz-transform: translate3d(100%, 0, 0);
      -ms-transform: translate3d(100%, 0, 0);
      -o-transform: translate3d(100%, 0, 0);
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
    }
  }
  .action {
    position: absolute;
    width: 38px;
    right: 20px;
    top: 15px;
    margin-right: 0;
    margin-top: 5px;
    z-index: 3;
    span {
      position: relative;
      display: inline-block;
      padding: 0 5px;
      background-color: #e4e25f;
      color: white;
      text-align: center;
      border-radius: 50%;
      width: 38px;
      height: 38px;
      line-height: 38px;
      margin-bottom: 5px;
    }
    span.added-heart:hover {
      background-color: #ff67ca;
      color: white;
    }
  }
  .action {
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
article:hover {
  -moz-box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 22;
}
article:hover .btn {
  opacity: 1;
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
article:hover .action > span {
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  -webkit-transform: scale(1);
  transform: scale(1);
}
article .action > span {
  display: block;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  -webkit-transform: scale(0);
  transform: scale(0);
}
article .action > span:nth-child(1) {
  -moz-transition-delay: 0.1s;
  -o-transition-delay: 0.1s;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
article .action > span:nth-child(2) {
  -moz-transition-delay: 0.2s;
  -o-transition-delay: 0.2s;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
</style>
