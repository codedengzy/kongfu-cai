<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
  <div style="padding-left: 100px; position: relative">
    <van-sidebar v-model="active" @change="OnChange" class="goodsNav">
      <van-sidebar-item title="热销HOT" />
      <van-sidebar-item title="功夫大菜" />
      <van-sidebar-item title="多样小菜" />
    </van-sidebar>
    <div class="goodsListWrap">
      <div
        class="goodsItem"
        v-for="n in goodsListObj"
        @click="showGoodsDetail(n)"
      >
        <div class="goodsImg">
          <img :src="n.goods_img" alt="菜品图片" />
          <p>{{ n.num }}</p>
        </div>
        <p>{{ n.goods_name }}</p>
        <p>{{ n.goods_txt }}</p>
        <p>￥{{ n.price }}</p>
      </div>
    </div>
  </div>
  <!-- 底部导航栏 -->
  <footerBar></footerBar>
</template>
<script>
import footerBar from "@/components/footerBar";
import { ref, onMounted } from "vue";
import axios from "axios";
import router from "@/router";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "allProducts",
  setup() {
    let msg = "全部商品页";
    const active = ref(0);
    // 菜品列表
    let goodsListObj = ref(null);
    // vuex部分
    const store = useStore();
    // 发送异步请求
    store.dispatch("actionsAllGoodsList", 0);
    // 返回赋值
    goodsListObj = computed(() => store.getters.getterAllGoodsList);
    let methods = {
      OnChange(inx) {
        // 发送异步请求
        store.dispatch("actionsAllGoodsList",inx);
      },
      //   跳转到商品详情页
      showGoodsDetail(n) {
        router.push({
          name: "goodsDetail",
          query: n,
        });
      },
    };
    return {
      msg,
      active,
      ...methods,
      goodsListObj,
    };
  },
  components: {
    footerBar,
  },
};
</script>
<style lang="less" scoped>
// 左边导航条
.goodsNav {
  position: absolute;
  left: 0;
  top: 0;
}
// 右边菜品列表
.goodsListWrap {
  width: 100%;
}
// 单个菜品item
.goodsListWrap .goodsItem {
  background-color: #fff;
  clear: both;
  margin: 0 0 10px 0;
  overflow: hidden;
}
.goodsListWrap .goodsItem p {
  margin: 0;
  text-align: left;
  font-size: 12px;
}
.goodsListWrap .goodsItem .goodsImg {
  float: left;
  overflow: hidden;
  width: 120px;
  height: 120px;
  position: relative;
  margin: 0 10px 0 0;
}
.goodsListWrap .goodsItem .goodsImg img {
  width: 120px;
  height: 120px;
}
.goodsListWrap .goodsItem .goodsImg p {
  position: absolute;
  right: 5px;
  bottom: 5px;
  background-color: #fff;
  font-size: 12px;
  border-radius: 5px;
  padding: 3px;
}
</style>
