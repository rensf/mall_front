<template>
  <div class="main">
    <home-header></home-header>
    <router-view />
  </div>
</template>

<script>
import HomeHeader from './components/Header';
export default {
  components: {
    HomeHeader,
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 0 50px;
}
</style>
