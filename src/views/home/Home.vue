<template>
  <div class="home">
    <home-slider></home-slider>
    <home-feature></home-feature>
    <home-popular></home-popular>
    <home-inspiration></home-inspiration>
    <home-design></home-design>
    <home-email></home-email>
  </div>
</template>

<script>
import HomeSlider from './components/Slider';
import HomeFeature from './components/Feature';
import HomePopular from './components/Popular';
import HomeInspiration from './components/Inspiration';
import HomeDesign from './components/Design';
import HomeEmail from './components/Email';
export default {
  name: 'Home',
  components: {
    HomeSlider,
    HomeFeature,
    HomePopular,
    HomeInspiration,
    HomeDesign,
    HomeEmail,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped></style>
