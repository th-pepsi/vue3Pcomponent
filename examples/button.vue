<template>
  <div>
    <p-button type="primary" @click="primayTap">主要的</p-button>
    <p-button type="danger">
      <p-icon name="icon-icon-wode-dianpudaohang"></p-icon>
      <p-icon name="icon-icon-wode-dianpudaohang"></p-icon>危险
    </p-button>
    <p-button type="disabled">失效</p-button>
    <p-button>默认</p-button>
    <p-button type="dashed">虚线按钮</p-button>
    <p-button type="primary" size="large">大按钮</p-button>
    <p-button type="primary" size="small">
      <p-icon name="icon-icon-wode-dianpudaohang"></p-icon>
      <p-icon name="icon-icon-wode-dianpudaohang"></p-icon>小按钮
    </p-button>
  </div>
</template>
<script>
export default {
  setup() {
    function primayTap() {
      alert('sss')
    }

    return {
      primayTap
    }
  }
}
</script>