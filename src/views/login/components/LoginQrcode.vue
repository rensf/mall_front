<template>
  <b-col class="login-form" cols="12">
    <span>扫码登录</span>
    <div>
      <img :src="qrUrl" />
    </div>
    <hr />
    <b-button @click="refreshQrcode">刷新</b-button>
  </b-col>
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