<template>
  <div class="popular">
    <h2 class="title-pp">Popular products</h2>
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
                <span>
                  <a href="javascript:void(0);">
                    <b-icon icon="eye"></b-icon>
                  </a>
                </span>
              </div>
              <b-card-img
                :src="'/api/product/viewProductImage/' + item.homeImage"
              ></b-card-img>
              <b-card-title>{{ item.productName }}</b-card-title>
              <b-card-text>
                <sub>$ {{ item.productPrice }}</sub>
                <sup>$ {{ item.productFPrice }}</sup>
              </b-card-text>
              <b-button><b-icon icon="cart3"></b-icon></b-button>
            </b-card>
          </article>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HomePopular",
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
      this.$getRequest("/product/queryProductList", this.queryForm).then(
        (res) => {
          this.data = res.data.result.records;
        }
      );
    },
    /**
     * @description 添加购物车
     */
    addCart() {
      
    }
  },
};
</script>

<style lang="less" scoped>
.popular {
  margin-top: 50px;
}
.title-pp {
  margin: 30px;
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
    .card-text {
      width: 100%;
      padding: 0 20px 20px 20px;
    }
    .card-text sub,
    .card-text sup {
      bottom: auto;
      top: auto;
      display: inline-block;
      margin-right: 10px;
    }
    .card-text sub {
      text-decoration: line-through;
      font-weight: 300;
    }
    .btn {
      background: #e4e25f;
      position: absolute;
      overflow: hidden;
      color: white;
      bottom: 35px;
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
        background-color: #d30707;
        color: white;
      }
      a:hover {
        background-color: #0967e2;
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