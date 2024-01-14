<template>
  <div class="color-picker">
    <span
      v-for="(item, index) in colors"
      :key="index"
      :style="`background-color: ${item}`"
      class="color-picker-btn"
      :class="{ checked: checkedIndex === index }"
      @click="checked(index)"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  props: {
    colors: {
      type: Array,
      default: () => {
        return ['#f7d400', '#cc4aca', '#ef6e6e'];
      },
    },
  },
  data() {
    return {
      checkedIndex: 0,
    };
  },
  methods: {
    checked(index) {
      this.checkedIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.color-picker {
  display: flex;
  .color-picker-btn {
    display: block;
    float: left;
    position: relative;
    width: 25px;
    height: 25px;
    background-color: #f8f8f8;
    border: 2px solid transparent;
    margin-right: 10px;
    text-align: center;
    font-size: 10px;
    line-height: 21px;
    color: black;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border-radius: 100%;
  }
  .color-picker-btn:hover {
    cursor: pointer;
  }
  .checked {
    border-color: black;
  }
}
</style>
