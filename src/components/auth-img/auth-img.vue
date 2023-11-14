<template>
  <img ref="authImg" />
</template>

<script>
export default {
  name: 'AuthImg',
  props: ['authSrc'],
  computed: {
    token() {
      return this.$store.state.user.token;
    },
  },
  mounted() {
    Object.defineProperty(Image.prototype, 'authSrc', {
      writable: true,
      enumerable: true,
      configurable: true,
    });
    let img = this.$refs.authImg;
    let request = new XMLHttpRequest();
    request.responseType = 'blob';
    request.open('get', this.authSrc, true);
    request.setRequestHeader('Authorization', this.token);
    request.onreadystatechange = () => {
      if (
        request.readyState === XMLHttpRequest.DONE &&
        request.status === 200
      ) {
        img.src = URL.createObjectURL(request.response);
        img.onload = () => {
          URL.revokeObjectURL(img.src);
        };
      }
    };
    request.send(null);
  },
};
</script>
