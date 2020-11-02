<template>
  <div style="padding-left:20px">
    <br>
    <Button></Button>
    <br>
    <Icon></Icon>
    <br>
    <Modal></Modal>
  </div>
</template>

<script>
import Button from "../examples/button";
import Icon from "../examples/icon";
import Modal from "../examples/modal";
export default {
  name: "App",
  components: {
    Button,
    Icon,
    Modal
  },
};
</script>

<style lang="scss">
</style>
