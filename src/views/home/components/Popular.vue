<template>
  <div class="popular">
    <h2 class="title-pp">Popular products</h2>

    <b-container fluid>
      <b-row cols="6" cols-lg="3">
        <b-col>
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
              <b-card-img src="@/assets/product-10.jpg"></b-card-img>
              <b-card-title>Anna</b-card-title>
              <b-card-text>
                <sub>$ 159.-</sub>
                <sup>$ 139.-</sup>
              </b-card-text>
              <b-button><b-icon icon="cart3"></b-icon></b-button>
            </b-card>
          </article>
        </b-col>
        <b-col>
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
              <b-card-img src="@/assets/product-9.jpg"></b-card-img>
              <b-card-title>Lucy</b-card-title>
              <b-card-text>
                <sub>$ 319.-</sub>
                <sup>$ 219.-</sup>
              </b-card-text>
              <b-button><b-icon icon="cart3"></b-icon></b-button>
            </b-card>
          </article>
        </b-col>
        <b-col>
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
              <b-card-img src="@/assets/product-8.jpg"></b-card-img>
              <b-card-title>Ella</b-card-title>
              <b-card-text>
                <sub>$ 899.-</sub>
                <sup>$ 750.-</sup>
              </b-card-text>
              <b-button><b-icon icon="cart3"></b-icon></b-button>
            </b-card>
          </article>
        </b-col>
        <b-col>
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
              <b-card-img src="@/assets/product-7.jpg"></b-card-img>
              <b-card-title>Anna</b-card-title>
              <b-card-text>
                <sub>$ 159.-</sub>
                <sup>$ 139.-</sup>
              </b-card-text>
              <b-button><b-icon icon="cart3"></b-icon></b-button>
            </b-card>
          </article>
        </b-col>
        <b-col>
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
              <b-card-img src="@/assets/product-6.jpg"></b-card-img>
              <b-card-title>Anna</b-card-title>
              <b-card-text>
                <sub>$ 159.-</sub>
                <sup>$ 139.-</sup>
              </b-card-text>
              <b-button><b-icon icon="cart3"></b-icon></b-button>
            </b-card>
          </article>
        </b-col>
        <b-col>
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
              <b-card-img src="@/assets/product-5.jpg"></b-card-img>
              <b-card-title>Anna</b-card-title>
              <b-card-text>
                <sub>$ 159.-</sub>
                <sup>$ 139.-</sup>
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
  methods: {
    queryProduct() {
      
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
      background: #3c5570;
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
        background-color: dimgray;
        color: white;
        text-align: center;
        border-radius: 50%;
        width: 38px;
        height: 38px;
        line-height: 38px;
        margin-bottom: 5px;
      }
      a:hover {
        background-color: #000000;
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