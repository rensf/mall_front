<template>
  <div class="email">
    <img src="@/assets/gallery-1.jpg" />
    <b-container fluid>
      <b-row>
        <b-col>
          <h3>Stay in touch!</h3>
          <p>Be first to know about all new interior features!</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-input placeholder="Enter your e-mail"></b-form-input>
        </b-col>
        <b-col md="4">
          <b-button variant="outline-light">Subscribe now</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HomeEmail",
};
</script>

<style lang="less" scoped>
.email {
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 15px;
  padding-right: 15px;
  overflow: hidden;
  img {
    width: 100%;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
  }
  .container-fluid {
    position: absolute;
    top: 40%;
    color: white;
    .row {
      padding: 5px 5%;
    }
  }
}
</style>