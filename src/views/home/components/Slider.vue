<template>
  <b-carousel v-model="slide" :interval="4000" fade controls>
    <!-- Text slides with image -->
    <b-carousel-slide>
      <template #img>
        <img class="slide-image" src="@/assets/slide-1.jpg" />
      </template>
      <template>
        <div class="slide-item-text-l">
          <div
            class="title-sf animate__animated animate__fadeInUp animate__delay-100ms"
          >
            Sofa Grace
          </div>
          <div
            class="title-sc animate__animated animate__fadeInUp animate__delay-200ms"
          >
            Score new arrivals from latest items
            <br />
            Multipurpose eCommerce template ready
          </div>
          <div
            class="btn-sf animate__animated animate__fadeInUp animate__delay-300ms"
          >
            <b-button variant="outline-warning">Buy Now</b-button>
            <b-button variant="outline-light">Get first discount</b-button>
          </div>
          <div
            class="title-gp animate__animated animate__fadeInUp animate__delay-400ms"
          >
            <div>Get special price</div>
            <div class="price">
              <span>$1499.99</span>
              <span>3499.99</span>
            </div>
            <small
              >** Product prices with discount are available until the end of
              stock
            </small>
          </div>
        </div>
      </template>
    </b-carousel-slide>

    <b-carousel-slide>
      <template #img>
        <img class="slide-image" src="@/assets/slide-2.jpg" />
      </template>
      <template>
        <div class="slide-item-text-l">
          <div
            class="title-kf animate__animated animate__fadeInUp animate__delay-100ms"
          >
            <span>Save now </span>
            <span>50% </span>
            <span>on new kitchen</span>
            <b-button variant="info">SHOP NOW</b-button>
          </div>
          <div
            class="title-gp animate__animated animate__fadeInUp animate__delay-400ms"
          >
            <div>Kitchen Moderna</div>
            <div class="price">
              <span>$7299.99</span>
              <span>8399.99</span>
            </div>
            <small
              >** Product prices with discount are available until the end of
              stock
            </small>
          </div>
        </div>
      </template>
    </b-carousel-slide>

    <b-carousel-slide>
      <template #img>
        <img class="slide-image" src="@/assets/slide-3.jpg" />
      </template>
      <template>
        <div class="slide-item-text-r">
          <div
            class="title-bf animate__animated animate__fadeInUp animate__delay-100ms"
          >
            Bathroom Furniture
          </div>
          <div
            class="title-bs animate__animated animate__fadeInUp animate__delay-200ms"
          >
            Score new arrivals from latest items
            <br />
            Multipurpose eCommerce template ready
          </div>
          <div
            class="btn-bf animate__animated animate__fadeInUp animate__delay-300ms"
          >
            <b-button variant="light">New collection</b-button>
            <b-button variant="outline-light">Get first discount</b-button>
          </div>
        </div>
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: "HomeSlider",
  props: {},
  data() {
    return {
      slide: 0,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.slide-image {
  height: ~"calc(100vh - 80px)";
  width: 100%;
  border-radius: 20px;
}
.slide-item-text-l {
  position: relative;
  text-align: left;
  .title-sf {
    position: absolute;
    top: -450px;
    left: -50px;
    font-size: 40px;
    font-weight: 600;
  }
  .title-sc {
    position: absolute;
    top: -380px;
    left: -50px;
  }
  .btn-sf {
    position: absolute;
    top: -310px;
    left: -50px;
    .btn {
      margin-right: 5px;
    }
  }
  .title-gp {
    position: absolute;
    top: -230px;
    left: -50px;
    .price span:first-child {
      font-size: 24px;
    }
    .price span:last-child {
      text-decoration: line-through;
      font-size: 80%;
      margin-left: 5px;
    }
  }
  .title-kf {
    position: absolute;
    top: -450px;
    left: -50px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 0.9;
    width: 230px;
    span:first-child {
      font-size: 40px;
    }
    span:nth-child(2) {
      font-size: 106px;
    }
    span:nth-child(3) {
      font-size: 24px;
    }
    .btn {
      width: 230px;
      margin-top: 15px;
    }
  }
}
.slide-item-text-r {
  position: relative;
  text-align: right;
  .title-bf {
    position: absolute;
    font-size: 40px;
    font-weight: 600;
    top: -400px;
    right: -50px;
    text-align: right;
  }
  .title-bs {
    position: absolute;
    top: -330px;
    right: -50px;
    text-align: right;
  }
  .btn-bf {
    position: absolute;
    top: -250px;
    right: -58px;
    .btn {
      margin-right: 5px;
    }
  }
}
</style>