<template>
  <div class="goodsDetailFooterBar">
    <van-tabbar v-model="footerActive" route>
      <van-tabbar-item to="/" icon="wap-home-o">回首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o">客服</van-tabbar-item>
      <van-tabbar-item to="/shoppingCart" :badge="shoppingCartNum" icon="cart-o"
        >购物车</van-tabbar-item
      >
    </van-tabbar>
    <div class="goodsPayAndCart">
      <label @click="addShoppingCart"></label>
      <span></span>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
import { Dialog } from "vant";

export default {
  name: "goodsDetailFooterBar",
  props: {
    pmsInfo: Object,
  },
  setup(props) {
    // 保存商品
    function saveGoodsFn() {
      // 将商品存入localStorage
      let pmsObj;
      // 获取本地数据
      let before_pmsInfo = JSON.parse(localStorage.getItem("pmsInfo"));
      // 判断数据是否为空
      if (before_pmsInfo != null) {
        pmsObj = before_pmsInfo;
      } else {
        // 初始化数组
        pmsObj = reactive([]);
      }
      // 开关去重法
      let isRepeat = true;
      for (let i = 0; i < pmsObj.length; i++) {
        if (pmsObj[i].goods_id === props.pmsInfo.goods_id) {
          isRepeat = false;
          pmsObj[i].goods_cartNum=Number(pmsObj[i].goods_cartNum)+1;
        }
      }
      props.pmsInfo.isCheck=true;
      console.log(props.pmsInfo);
      if (isRepeat) {
        pmsObj.push(props.pmsInfo);
      }
      localStorage.setItem("pmsInfo", JSON.stringify(pmsObj));
    }
    /* ***************************************************** */
    let msg = "底部导航栏";
    // footerActive 所以Vue3提供了ref方法实现简单值得监听
    const footerActive = ref(0);
    // 显示购物车商品数量
    let shoppingCartNum = ref(0);
    // 计算商品数量
    function shoppingCartNumFn() {
      let num=0;
      let goodsList=JSON.parse(localStorage.getItem("pmsInfo"));
      if (goodsList!=null) {
        for (let i = 0; i < goodsList.length; i++) {
          num+=Number(goodsList[i].goods_cartNum);
        }
        shoppingCartNum.value=num;
        // console.log(num);
      }else{
        shoppingCartNum.value=0;
      }
    }
    shoppingCartNumFn();
    //方法对象
    let methodObj = {
      addShoppingCart() {
        Dialog.alert({
          message: "加入购物车成功",
          theme: "round-button",
        }).then(() => {
          saveGoodsFn();
          // 计算商品数量
          shoppingCartNumFn();
        });
      },
    };
    return {
      msg,
      footerActive,
      ...methodObj,
      shoppingCartNum,
    };
  },
};
</script>
<style lang="less" scoped>
.goodsDetailFooterBar .van-tabbar {
  width: 45%;
}
.goodsDetailFooterBar .goodsPayAndCart {
  width: 54%;
  height: 48px;
  background: #fff;
  position: fixed;
  bottom: -8px;
  right: 0;
}
.goodsDetailFooterBar .goodsPayAndCart label {
  width: 100px;
  height: 35px;
  float: left;
  background: url("../assets/addShopCarBtn.jpg") no-repeat;
}
.goodsDetailFooterBar .goodsPayAndCart span {
  width: 100px;
  height: 35px;
  float: right;
  background: url("../assets/payBtn.jpg") no-repeat;
}
</style>
