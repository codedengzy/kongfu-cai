<template>
  <div class="footerBar">
    <van-tabbar v-model="footerActive" active-color="#753819" route>
      <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/shoppingCart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/allProducts" icon="bag-o">全部商品</van-tabbar-item>
      <van-tabbar-item to="/customerServe" icon="comment-o">客服</van-tabbar-item>
      <van-tabbar-item to="/userCenter" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  name: "footerBar",
  setup() {
    let msg = "底部导航栏";
    // footerActive 所以Vue3提供了ref方法实现简单值得监听
    const footerActive=ref(0);
    return {
      msg,
      footerActive
    };
  },
};
</script>
