<template>
  <div class="popular">
    <h2 class="title-pp" @click="$router.push('/product')">Popular products</h2>
    <b-container fluid>
      <b-row>
        <b-col cols="4" v-for="item in data" :key="item.productId">
          <article>
            <b-card no-body>
              <div class="action">
                <span>
                  <a class="added-heart" href="javascript:void(0);">
                    <b-icon icon="heart"></b-icon>
                  </a>
                </span>
              </div>
              <auth-img
                :authSrc="
                  '/api/product/product/viewProductImage/' + item.homeImageList[0]
                "
              ></auth-img>
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
              <b-button @click="addCartProduct(item)"
                ><b-icon icon="cart3"></b-icon
              ></b-button>
            </b-card>
          </article>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AuthImg from '_c/auth-img';
export default {
  name: 'HomePopular',
  components: {
    AuthImg,
  },
  data() {
    return {
      queryForm: {
        current: 1,
        total: 0,
        size: 6,
      },
      data: [],
    };
  },
  created() {
    this.queryProduct();
  },
  methods: {
    queryProduct() {
      // 查询首推产品
      this.queryForm.productFirst = 1;
      this.$getRequest(
        '/product/product/queryProductList',
        this.queryForm
      ).then((res) => {
        this.data = res.data.result.records;
      });
    },
    // 添加购物车
    addCartProduct(item) {
      let addCartProductForm = {
        productId: item.productId,
        userId: this.$store.state.user.userInfo.userId,
      };
      this.$postRequest('/user/cart/addCartProduct', addCartProductForm).then((res) => {
        if (res.data.result) {
          this.$bvToast.toast(item.productName + `已成功添加至购物车`, {
            title: '提示',
            variant: 'success',
            autoHideDelay: 3000,
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.popular {
  margin-top: 50px;
}
.title-pp {
  margin: 30px;
  cursor: pointer;
}
article {
  position: relative;
  transition: all 0.3s;
  margin-bottom: 1px;
  overflow: hidden;
  border: 1px solid #f5f4ef;
  margin-left: -1px;
  margin-top: -2px;
  margin-bottom: 30px;
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
    .card-title {
      padding: 20px 20px 0 20px;
    }
    .card-subtitle {
      width: 100%;
      padding: 0 20px 20px 20px;
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
    .action {
      position: absolute;
      width: 38px;
      right: 20px;
      top: 15px;
      margin-right: 0;
      margin-top: 5px;
      z-index: 3;
      a {
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
      a.added-heart:hover {
        background-color: #ff67ca;
        color: white;
      }
      a:hover {
        background-color: #32bcf7;
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
