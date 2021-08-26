<template>
  <!-- 商品加减按钮 -->
  <div class="addMinBtn">
    <input class="minus" type="button" value="-" @click="minusFn" />
    <input class="num" type="text" :value="sc_n.goods_cartNum" />
    <input class="add" type="button" value="+" @click="addFn" />
  </div>
</template>
<script>
import { reactive, watch } from "vue";

export default {
  name: "plusMinusCart",
  props: {
    sc_GoodsObj: Object,
  },
  setup(props) {
    let sc_n = reactive(props.sc_GoodsObj);
    let msg = "购物车加减号组件";
    watch(
      () => sc_n.goods_cartNum,
      (new_v, old_v) => {
        sc_n.goods_cartNum = new_v;
      }
    );
    // 事件对象
    let methodsObj = {
      addFn() {
        ++sc_n.goods_cartNum;
      },
      minusFn() {
        --sc_n.goods_cartNum;
      },
    };
    return {
      msg,
      sc_n,
      ...methodsObj,
    };
  },
};
</script>
<style lang="less" scoped>
/* 加减按钮 */
.addMinBtn {
  margin-bottom: 20px;
}
.addMinBtn .num {
  width: 20px;
  margin: 0 10px;
  text-align: center;
}
</style>
