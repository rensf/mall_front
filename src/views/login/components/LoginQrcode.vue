<template>
  <div class="login-block">
    <b-row>
      <b-col>
        <div class="h4">
          登录
          <span class="btn btn-main">创建账号</span>
        </div>
        <hr />
      </b-col>
      <b-col class="login-form" cols="12">
        <span>扫码登录</span>
        <div>
          <img :src="qrUrl" />
        </div>
        <hr />
        <b-button @click="refreshQrcode">刷新</b-button>
      </b-col>
    </b-row>
    <div class="login-switch" @click="switchLogin">
      <img src="@/assets/computer.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginQrcode",
  created() {
    this.getQrcode();
  },
  data() {
    return {
      qrUrl: "",
    };
  },
  methods: {
    switchLogin() {
      this.$emit("switch-login", "normal");
    },
    getQrcode() {
      this.$getRequest("/user/generateQrcode").then((res) => {
        this.qrUrl = "data:image/png;base64," + res.data.result;
      });
    },
    refreshQrcode() {
      

      if (typeof WebSocket === undefined) {
        console.log("浏览器不支持WebSocket");
      } else {
        console.log("浏览器支持WebSocket");
        let socket = new WebSocket("ws://127.0.0.1:8527/websocket");
        socket.open = function () {
          console.log("连接打开！");
        };

      }
    },
  },
};
</script>

<style lang="less" scoped>
.login-block {
  position: relative;
  background: #ffffff;
  box-sizing: border-box;
  background-repeat: no-repeat;
  border-radius: 20px 20px 0 20px;
  width: 30%;
  margin: auto;
  padding: 20px;
  z-index: 100;

  // .login-form {
  //   text-align: center;
  //   height: 200px;
  // }

  .login-switch {
    position: absolute;
    right: 0;
    bottom: 0;
    img {
      padding: 3px;
      width: 60px;
      height: 60px;
      cursor: pointer;
    }
  }
}

.btn-main {
  float: right;
  background-color: transparent;
  color: #000000;
  border: none;
  position: relative;
  padding-left: 0;
  padding-right: 0;
}

.btn-main:after {
  content: "";
  width: 0;
  height: 1px;
  position: absolute;
  bottom: 0;
  background-color: #3c5570;
  left: 0;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.btn-main:hover:after {
  width: 100%;
}
</style>