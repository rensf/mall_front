<template>
  <div class="inspiration">
    <h2 class="title-ii">Interior inspiration</h2>
    <b-container fluid>
      <b-row>
        <b-col lg="8">
          <figure>
            <figcaption>
              <img src="@/assets/box-1.jpg" />
            </figcaption>
            <b-button variant="outline-light">Open up for easy living</b-button>
          </figure>
        </b-col>
        <b-col lg="4">
          <figure>
            <figcaption>
              <img src="@/assets/box-2.jpg" />
            </figcaption>
            <b-button variant="outline-light">Traditional looks</b-button>
          </figure>
        </b-col>
        <b-col lg="4">
          <figure>
            <figcaption>
              <img src="@/assets/box-3.jpg" />
            </figcaption>
            <b-button variant="outline-light">Sleek and sustainable</b-button>
          </figure>
        </b-col>
        <b-col lg="4">
          <figure>
            <figcaption>
              <img src="@/assets/box-4.jpg" />
            </figcaption>
            <b-button variant="outline-light">Compact living</b-button>
          </figure>
        </b-col>
        <b-col lg="4">
          <figure>
            <figcaption>
              <img src="@/assets/box-5.jpg" />
            </figcaption>
            <b-button variant="outline-light">Classic design</b-button>
          </figure>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HomeInspiration",
};
</script>

<style lang="less" scoped>
.inspiration {
  margin-top: 50px;
}
.title-ii {
  margin: 30px;
}
figure {
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  figcaption {
    position: relative;
    background-position: center;
    background-size: cover;
    min-height: 150px;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    img {
      display: block;
      width: 100%;
      height: 400px;
    }
  }
  figcaption:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: -moz-linear-gradient(
      top,
      transparent 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      transparent 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
    /* IE6-9 */
    opacity: 0;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .btn {
    position: absolute;
    top: 50%;
    left: 50%;
    bottom: auto;
    -moz-transform: translate(-50%, 0%);
    -ms-transform: translate(-50%, 0%);
    -o-transform: translate(-50%, 0%);
    -webkit-transform: translate(-50%, 0%);
    transform: translate(-50%, 0%);
    opacity: 0;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
}
figure:hover figcaption {
  -moz-transform: scale(1.05);
  -ms-transform: scale(1.05);
  -o-transform: scale(1.05);
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
figure:hover figcaption:before {
  opacity: 0.8;
}
figure:hover .btn {
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  top: 80%;
  opacity: 1;
}
</style>