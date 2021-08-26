<template>
  <!-- 首页轮播图 -->
  <div class="indexWrap">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="imgItem in dataObj">
        <img :src="imgItem" alt="轮播图" />
      </van-swipe-item>
    </van-swipe>
  </div>
  <!-- 限时秒杀 -->
  <div class="t_seckillWrap">
    <div class="seckill">
      <!-- 倒计时 -->
      <div class="headerTime">
        <p>0点秒杀</p>
        <van-count-down :time="time_val" class="count-down-sty">
          <template #default="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </div>
      <!-- 抢购按钮 -->
      <div class="sanp_upBtn">去抢购 ></div>
      <!-- 限时秒杀菜品列表 -->
      <div class="seckill_goods">
        <van-swipe :loop="false" :width="200" :show-indicators="false">
          <van-swipe-item v-for="n in seckillGoodsObj" class="seckillGoodsList">
            <!-- 为了列表宽度能够正好显示 ，
                所以 .goodsObj 不能加 margin
                所以，又套了一层 .goodsBorder -->
            <div class="goodsBorder">
              <img :src="n.goods_img" alt="秒杀商品图片" />
              <p style="margin: 0">{{ n.goods_name }}</p>
              <div>
                <label>￥{{ n.price }}</label
                >/
                <del
                  ><span>￥{{ n.origin_price }}</span></del
                >
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
  <!-- 热销导航条 -->
  <div class="goodsNavHot">
    <van-tabs
      class="hot_listWrap"
      v-model:active="hotActive"
      title-inactive-color="#e29a34"
      title-active-color="#e29a34"
    >
      <van-tab v-for="item in goodsHotDataObj" :title="item.nav_title">
        <!-- 热销商品列表 -->
        <div v-for="goods in item.goods_Obj" class="goods_ObjList">
          <img :src="goods.goods_img" alt="热销菜品" />
          <p>{{ goods.goods_name }}</p>
          <p>{{ goods.goods_txt }}</p>
          <p>{{ goods.num }}</p>
          <p>￥{{ goods.price }}</p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
  <!-- 底部导航栏 -->
  <footerBar></footerBar>
</template>

<script>
// @ is an alias to /src
import DATA_Obj from "@/DATA_Obj.config";
import { ref } from 'vue';
import footerBar from '@/components/footerBar'

export default {
  name: "indexWrap",
  // setup函数是处于生命周期函数 beforeCreate 和 Created 两个钩子函数之间的函数
  // 也就说在 setup函数中是无法 使用 data 和 methods 中的数据和方法的
  setup() {
    // 首页轮播图
    let dataObj = DATA_Obj.headerImgs;
    // 倒计时时间
    let time_val = 5 * 60 * 60 * 1000;
    // hotActive热销导航
    let hotActive = ref(0);
    
    // 菜品列表数据
    let seckillGoodsObj = DATA_Obj.seckill_goods;
    // 热销hot导航条标题
    let goodsNavHotList = DATA_Obj.goodsNavHotData;
    // console.log(goodsNavHotList);
    // 热销导航条和商品列表
    let goodsHotDataObj = DATA_Obj.goodsHotData;
    return {
      dataObj,
      time_val,
      seckillGoodsObj,
      hotActive,
      goodsNavHotList,
      goodsHotDataObj
    };
  },
  components:{
    footerBar
  }
};
</script>
<style lang="less" scoped>
// 首页轮播图
.my-swipe .van-swipe-item {
  width: 100%;
  height: 330px;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 330px;
}
// 限时秒杀模块
.t_seckillWrap {
  width: 100%;
  // height: 250px;
  background-color: #fff;
  border-radius: 15px;
  position: relative;
  top: -10px;
  z-index: 4;
  padding-top: 20px;
}
.t_seckillWrap .seckill {
  width: 90%;
  // height: 220px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: #ffd871;
  background-image: url("../assets/seckill_tip_bg.jpg");
  background-repeat: no-repeat;
  background-position: 8px 8px;
  overflow: hidden;
}
// 倒计时
.colon {
  display: inline-block;
  margin: 0 2px;
  color: #753819;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #753819;
}
.seckill .headerTime {
  float: left;
  margin: 13px 0 0 122px;
  background: #ffe9b0;
  padding: 5px 8px;
  border-radius: 5px;
}
.seckill .headerTime p {
  float: left;
  margin: 0 2px 0 0;
  color: #753819;
  font-size: 12px;
}
.seckill .headerTime .count-down-sty {
  float: left;
  margin: 0;
}
// 抢购按钮
.sanp_upBtn {
  float: right;
  font-size: 12px;
  margin: 14px 10px 0 0;
  background-color: #ffe9b0;
  color: #753819;
  border-radius: 15px;
  padding: 5px 5px;
  box-shadow: 1px 1px 1px #753819;
}
// 限时秒杀菜品列表
.seckill .seckill_goods {
  width: 92%;
  height: 200px;
  background-color: #ffd871;
  margin: 55px auto 15px auto;
}
// 秒杀商品列表
.seckill_goods .seckillGoodsList {
}
.seckill_goods .seckillGoodsList img {
  width: 100%;
  height: 150px;
}
.seckill_goods .seckillGoodsList .goodsBorder {
  margin: 0 10px;
  background-color: #fff;
  border-radius: 5px;
  font-size: 12px;
  overflow: hidden;
  padding-bottom: 10px;
}
.seckill_goods .seckillGoodsList .goodsBorder label {
  background-color: #753819;
  color: #fff;
  padding: 2px 3px;
  border-radius: 5px;
}
.seckill_goods .seckillGoodsList .goodsBorder span {
  background-color: #ffd871;
  padding: 2px 3px;
  border-radius: 5px;
}
// 热销商品
.goodsNavHot {
  // padding-left: 100px;
  background-color: #f3f3f3;
  padding-bottom: 50px;
  overflow: hidden;
}
.goodsNavHot .hot_listWrap {
  padding-top: 7px;
}
// 热销商品列表
.goods_ObjList {
  float: left;
  background-color: #fff;
  margin: 0 10px 10px 0;
  font-size: 12px;
  width: 47%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 2px #eee;
}
.goods_ObjList img {
  width: 100%;
  height: 150px;
}
</style>
