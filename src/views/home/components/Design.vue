<template>
  <div class="design">
    <h2 class="title-ds">Design stories</h2>
    <b-container fluid>
      <b-row>
        <b-col lg="4">
          <article>
            <b-card no-body>
              <b-card-img src="@/assets/product-1.jpg"></b-card-img>
              <b-card-title>
                Home Organizers that Add Color to Your Space
              </b-card-title>
              <b-card-text>2019/08/12</b-card-text>
            </b-card>
          </article>
        </b-col>
        <b-col lg="4">
          <article>
            <b-card no-body>
              <b-card-img src="@/assets/product-2.jpg"></b-card-img>
              <b-card-title>
                How to use room dividers in small spaces
              </b-card-title>
              <b-card-text>2019/08/23</b-card-text>
            </b-card>
          </article>
        </b-col>
        <b-col lg="4">
          <article>
            <b-card no-body>
              <b-card-img src="@/assets/product-3.jpg"></b-card-img>
              <b-card-title> How to pick a garden color palette </b-card-title>
              <b-card-text>2019/09/01</b-card-text>
            </b-card>
          </article>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HomeDesign",
};
</script>

<style lang="less" scoped>
.design {
  margin-top: 50px;
}
.title-ds {
  margin: 30px;
}
article {
  position: relative;
  -moz-box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  border-radius: 8px;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
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
      text-align: right;
      color: #cccccc;
    }
  }
}
article:hover {
  -moz-box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
  -moz-transform: translateY(-5px);
  -ms-transform: translateY(-5px);
  -o-transform: translateY(-5px);
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
}
</style>