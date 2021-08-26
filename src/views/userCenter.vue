<template>
  <!-- 用户信息 -->
  <div class="myWrap">
    <label class="face"></label>
    <p class="userName">我是dzy</p>
    <b class="userId">345678905</b>
    <ul class="userData">
      <li>0 <br />储值</li>
      <li>0 <br />优惠券</li>
      <li>0 <br />积分</li>
      <li @click="overlayShow = true">
        <em class="iconfont icon-ico"></em>
        <br />会员码
      </li>
    </ul>
  </div>
  <!-- 会员码 -->
  <van-overlay
    style="z-index: 99"
    :show="overlayShow"
    @click="overlayShow = false"
  >
    <div class="wrapper">
      <div class="block" />
    </div>
  </van-overlay>
  <!-- 我的订单 -->
  <div class="myOrder">
    <van-nav-bar
      left-text="我的订单"
      right-text="全部订单"
      @click-right="allOrderFn"
    />
    <van-grid :column-num="3">
      <van-grid-item
        v-for="(n,inx) in orderTitle"
        :key="inx">
        <img class="order_img" :src="n.icon_url" alt="图片">
        <p class="order_title">{{n.title}}</p>
      </van-grid-item>
    </van-grid>
  </div>
  <!-- 底部导航 -->
  <footerBar></footerBar>
</template>
<script>
import { ref } from "vue";
import footerBar from "@/components/footerBar";

export default {
  name: "userCenter",
  setup() {
    let msg = "用户中心";
    // 订单title
    let orderTitle = [
      {
        title: "待付款",
        icon_url:
          "http://www.laoshang01.com/vue3_resources/v3_demo1_pic/order_icon/order_1.png",
      },
      {
        title: "待发货",
        icon_url:
          "http://www.laoshang01.com/vue3_resources/v3_demo1_pic/order_icon/order_2.png",
      },
      {
        title: "待收货",
        icon_url:
          "http://www.laoshang01.com/vue3_resources/v3_demo1_pic/order_icon/order_3.png",
      },
      {
        title: "待评价",
        icon_url:
          "http://www.laoshang01.com/vue3_resources/v3_demo1_pic/order_icon/order_4.png",
      },
      {
        title: "售后记录",
        icon_url:
          "http://www.laoshang01.com/vue3_resources/v3_demo1_pic/order_icon/order_5.png",
      },
    ];
    let overlayShow = ref(false);
    // 事件对象
    let methodsObj = {
      // 点击显示全部订单
      allOrderFn() {
        console.log("111111111");
      },
    };
    return {
      msg,
      ...methodsObj,
      overlayShow,
      orderTitle
    };
  },
  components: {
    footerBar,
  },
};
</script>
<style lang="less" scoped>
/* 用户信息 */
div.myWrap {
  width: 90%;
  height: 200px;
  margin: 10px auto;
  background: #ff17009e;
  border-radius: 20px 50px;
  box-shadow: 4px 7px 15px #ddd;
  position: relative;
}
div.myWrap label.face {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: url("../assets/logo.png") no-repeat;
  background-size: cover;
  border: 1px solid #fff;
  position: absolute;
  top: 30px;
  left: 40px;
}
div.myWrap p.userName {
  color: #fff;
  font-weight: bold;
  position: absolute;
  top: 15px;
  left: 120px;
}
div.myWrap b.userId {
  color: #fff;
  font-weight: normal;
  position: absolute;
  top: 60px;
  left: 120px;
}
div.myWrap ul.userData {
  position: absolute;
  left: 40px;
  bottom: 20px;
  color: #fff;
}
div.myWrap ul.userData li {
  float: left;
  margin: 0 30px 0 0;
}
/* 二维码 */
@font-face {
  font-family: "iconfont"; /* Project id 2748902 */
  src: url("//at.alicdn.com/t/font_2748902_42zfkwxc2tl.woff2?t=1629121558196")
      format("woff2"),
    url("//at.alicdn.com/t/font_2748902_42zfkwxc2tl.woff?t=1629121558196")
      format("woff"),
    url("//at.alicdn.com/t/font_2748902_42zfkwxc2tl.ttf?t=1629121558196")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-ico:before {
  content: "\e646";
}
// 会员码
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 120px;
  height: 120px;
  background: url("../assets/user_code.png") no-repeat;
  background-size: cover;
}
/* 我的订单 */
div.myOrder {
  width: 90%;
  height: auto;
  margin: 20px auto;
  background: #fff;
  border-radius: 20px;
  box-shadow: 4px 7px 15px #ddd;
  border: 1px solid #eee;
}
div.myOrder img.order_img{
	width:35px;
}
div.myOrder p.order_title{
	font-size:12px;
}
</style>
