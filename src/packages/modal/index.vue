<template>
  <div>
    <a-modal
      :visible="visible"
      :title="title"
      @cancel="cancelModal"
      @ok="cancelModal"
    >
      <slot></slot>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: "PModal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Pepsi modal",
    },
  },
  setup(props, ctx) {
    const cancelModal = () => {
      ctx.emit('changeS',false)
    };

    return {
      cancelModal,
    };
  },
};
</script>