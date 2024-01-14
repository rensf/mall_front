<template>
  <div class="size-picker">
    <span
      v-for="(item, index) in size"
      :key="index"
      class="size-picker-btn"
      :class="{ checked: checkedIndex === index }"
      @click="checked(index)"
    >
      {{ item }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'SizePicker',
  props: {
    size: {
      type: Array,
      default: () => {
        return ['S', 'M', 'L', 'XL', 'XXL'];
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
.size-picker {
  display: flex;
  .size-picker-btn {
    display: block;
    float: left;
    position: relative;
    width: 25px;
    height: 25px;
    background-color: #ece3b4;
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
  .size-picker-btn:hover {
    cursor: pointer;
  }
  .checked {
    border-color: black;
  }
}
</style>
