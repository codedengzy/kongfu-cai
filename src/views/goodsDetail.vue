<template>
  <!-- 顶部导航 -->
  <van-nav-bar
    :title="msg"
    left-text="返回"
    left-arrow
    @click-left="goBackClick"
  />
  <!-- 商品详情 -->
  <div class="goodsDetailWrap">
    <img :src="pms.goods_img" alt="菜品" />
    <p>{{ pms.goods_name }}</p>
    <p>{{ pms.goods_txt }}</p>
    <p>{{ pms.num }}</p>
    <p>￥{{ pms.price }}</p>
  </div>
  <!-- 底部导航条 -->
  <goodsDetailFooterBar :pmsInfo="pms"></goodsDetailFooterBar>
</template>
<script>
import { useRoute } from "vue-router";
import { reactive } from "vue";
import goodsDetailFooterBar from "../components/goodsDetailFooterBar";
import router from "@/router";

export default {
  name: "goodsDetail",
  setup() {
    let msg = "商品详情页";
    let pms = reactive({});
    const route = useRoute();
    // console.log(route.query);
    let methodsObj = {
        // 返回首页
      goBackClick() {
        router.push({
          path: "/allProducts",
        });
      },
    };
    pms = route.query;
    return {
      msg,
      pms,
      ...methodsObj
    };
  },
  components: {
    goodsDetailFooterBar,
  },
};
</script>
<style lang="less" scoped>
.goodsDetailWrap img {
  width: 100%;
}
</style>
