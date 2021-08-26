<template>
  <div class="customerServeWrap">
    <h1>客服先不做</h1>
  </div>
  <footerBar></footerBar>
</template>
<script>
import { ref } from "vue";
import footerBar from "@/components/footerBar";

export default {
  name: "customerServe",
  setup() {
    let msg = "模拟客服";
    return {
      msg,
    };
  },
  components: {
    footerBar,
  },
};
</script>
<style lang="less" scoped>

</style>

