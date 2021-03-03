<template>
  <div class="feature">
    <h2 class="title-fc">Featured categories</h2>
    <b-container fluid>
      <b-row>
        <b-col sm="4">
          <article v-tilt="{ glare: true, max: 3, glare: 1 }">
            <div class="image">
              <img src="@/assets/product-1.jpg" />
            </div>
            <div class="entry">
              <div class="label">2020 Collection</div>
              <div class="title">
                <h2>Beedroms</h2>
              </div>
              <div class="description">
                <p>Top picks four your desire</p>
              </div>
              <div class="show-more">
                <b-button variant="outline-light">Shop now</b-button>
              </div>
            </div>
          </article>
        </b-col>
        <b-col sm="4">
          <article v-tilt="{ glare: true, max: 3, glare: 1 }">
            <div class="image">
              <img src="@/assets/product-2.jpg" />
            </div>
            <div class="entry">
              <div class="label">Modern design</div>
              <div class="title">
                <h2>Kitchens</h2>
              </div>
              <div class="description">
                <p>Explore popular devices</p>
              </div>
              <div class="show-more">
                <b-button variant="outline-light">Shop now</b-button>
              </div>
            </div>
          </article>
        </b-col>
        <b-col sm="4">
          <article v-tilt="{ glare: true, max: 3, glare: 1 }">
            <div class="image">
              <img src="@/assets/product-3.jpg" />
            </div>
            <div class="entry">
              <div class="label">New discounts</div>
              <div class="title">
                <h2>Living rooms</h2>
              </div>
              <div class="description">
                <p>Available for quick shipping</p>
              </div>
              <div class="show-more">
                <b-button variant="outline-light">Shop now</b-button>
              </div>
            </div>
          </article>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HomeFeature",
};
</script>

<style lang="less" scoped>
.feature {
  margin-top: 50px;
}
.title-fc {
  margin: 30px;
}
article {
  position: relative;
  color: white;
  text-align: center;
  .entry {
    background-color: rgba(0, 0, 0, 0.2);
    background-color: transparent;
    width: 100%;
    top: 0;
    overflow: hidden;
    padding: 30px 15px;
    position: absolute;
    .description {
      padding: 30px;
      color: white;
    }
    .show-more {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
    }
  }
  .image img {
    border-radius: 10px;
    display: block;
    width: 100%;
  }
  .image:before {
    background: -moz-linear-gradient(
      top,
      black 0%,
      rgba(255, 255, 255, 0) 100%
    );
    /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      black 0%,
      rgba(255, 255, 255, 0) 100%
    );
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      black 0%,
      rgba(255, 255, 255, 0) 100%
    );
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#00ffffff',GradientType=0 );
    /* IE6-9 */
    position: absolute;
    opacity: 0.5;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    border-radius: 10px;
  }
}
article:hover .image:before {
  opacity: 0.9;
}
article .description {
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  -moz-transform: translate3d(0, 20px, 0);
  -ms-transform: translate3d(0, 20px, 0);
  -o-transform: translate3d(0, 20px, 0);
  -webkit-transform: translate3d(0, 20px, 0);
  transform: translate3d(0, 20px, 0);
  opacity: 0;
}
article:hover .description {
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
article .show-more .btn {
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  -webkit-transform: scale(0);
  transform: scale(0);
}
article:hover .show-more .btn {
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>