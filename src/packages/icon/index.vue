<template>
     <span class='iconfont' :class="name" ></span>
</template>

<script>
export default {
  name: "PIcon",
  props: {
    name:{
      type:String,
    }
  },
  setup(props){
  }
};
</script>

<style>
</style>