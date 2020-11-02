<template>
  <div>
    <p-button @click='showModal'>展示modal</p-button>
    <p-modal :visible="showStatus" title="pepsi" @changeS='cancelModal'>
      我是一个小宝 我的文化高深
    </p-modal>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup(props) {
    let showStatus = ref(false);
    const showModal = ()=>{
        showStatus.value = true
    }
    const cancelModal = (val)=>{
      showStatus.value = val
    }
    return {
      showStatus,
      showModal,
      cancelModal
    };
  },
};
</script>