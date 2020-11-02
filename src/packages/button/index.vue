<template>
  <a-button :type="type" :size="size">
    <slot></slot>
  </a-button>
</template>

<script>
export default {
  name: "PButton",
  props: {
    type: {
      type: String,
      validator(type) {
        if (
          !["primary", "danger", "disabled","dashed"].includes(type)
        ) {
          throw new Error(`button类型错误`);
        }
        return true;
      },
    },
    size: {
      type: String,
      defualt:'default',
      validator(type) {
        if (
          !["large", "small", "default"].includes(type)
        ) {
          throw new Error(`button尺寸错误`);
        }
        return true;
      },
    },
  },
  setup(props){
  }
};
</script>

<style>
</style>