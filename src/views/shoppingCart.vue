<template>
  <!-- 共计商品数、清空 -->
  <div class="titleBar">
    <label>共计 {{ totalGoodsNum }} 件商品</label>
    <span @click="emptyToCart">清空购物车</span>
  </div>
  <!-- 现售商品 -->
  <div class="shopCarBody">
    <dl>
      <dt>现售商品</dt>
      <!-- 单个商品start -->
      <goodsWrap 
      :gcObj="goodsCartObj" 
      :isCheckedBox="isCheckedBox"
      @checkgoods-event="checkGoodsEvent"></goodsWrap>
      <!-- 单个商品end -->
      <!-- 商品为空显示 -->
      <h1 v-if="isEmptyGoodsCart" @click="goBackAllGoodsList">
        <p>当前购物车为空</p>
        <p>点击返回全部商品列表</p>
      </h1>
    </dl>
  </div>
  <!-- 合计、去结算 -->
  <div class="toPayWrap">
    <input @click="selectAllBtnFn" :checked="isAllChecked" type="checkbox" id="allSelect" class="allSelect" />
    <label for="allSelect">全选</label>
    <span>合计:￥{{ totalGoodsMoney }}</span>
    <p>去结算({{ totalGoodsNum }})</p>
  </div>
  <!-- 底部导航 -->
  <footerBar></footerBar>
</template>
<script>
import { ref, reactive } from "vue";
import footerBar from "@/components/footerBar";
import goodsWrap from "@/components/goodsWrap";
import router from "@/router";
import { Dialog } from "vant";

export default {
  name: "shoppingCart",
  setup() {
    let msg = "商品购物车";
    // 购物车商品
    let goodsCartObj = reactive({});
    // 获取本地数据
    goodsCartObj = JSON.parse(localStorage.getItem("pmsInfo"));
    // 是否有数据 默认不为空
    let isEmptyGoodsCart = ref(false);
    // 商品总数
    let totalGoodsNum = ref(0);
    // 商品总价
    let totalGoodsMoney = ref(0);
    if (goodsCartObj !== null) {
      for (let i = 0; i < goodsCartObj.length; i++) {
        totalGoodsNum.value += Number(goodsCartObj[i].goods_cartNum);
        totalGoodsMoney.value +=
          Number(goodsCartObj[i].goods_cartNum) * Number(goodsCartObj[i].price);
      }
    } else {
      isEmptyGoodsCart.value = true;
    }
    // 全选和全不选
    let isCheckedBox=ref(true);
    let isAllChecked=ref(true);
    // 事件对象
    let methodsObj = {
      goBackAllGoodsList() {
        router.push("/allProducts");
      },
      emptyToCart() {
        Dialog.confirm({
          message: "是否清空购物车？",
        })
          .then(() => {
            //   清空购物车对象
            localStorage.removeItem("pmsInfo");
            isEmptyGoodsCart.value = true;
            totalGoodsNum.value = 0;
            totalGoodsMoney.value = 0;
          })
          .catch(() => {
            return false;
          });
      },
    //   全选与全不选
      selectAllBtnFn(){
          isCheckedBox.value=isCheckedBox.value?false:true;
      },
    //  接收子组件的自定义事件 
      checkGoodsEvent(n){
        //   console.log(n);
          isAllChecked.value=n;
      }
    };
    return {
      msg,
      goodsCartObj,
      totalGoodsNum,
      totalGoodsMoney,
      isEmptyGoodsCart,
      ...methodsObj,
      isCheckedBox,
      isAllChecked
    };
  },
  components: {
    footerBar,
    goodsWrap,
  },
};
</script>
<style lang="less" scoped>
/* 共计商品数、清空 */
.titleBar {
  width: 92%;
  height: 50px;
  background: #fff;
  margin: 20px auto;
  border-radius: 10px;
  font-size: 12px;
  line-height: 50px;
  box-shadow: 0px 3px 7px 2px #f4f3f3;
}
.titleBar label {
  float: left;
  margin: 0 0 0 20px;
}
.titleBar span {
  float: right;
  margin: 0 20px 0 0;
}

/* 菜品列表 */
.shopCarBody {
  width: 92%;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 10px;
  font-size: 12px;
  box-shadow: 0px 3px 7px 2px #f4f3f3;
  padding-bottom: 20px;

  margin-bottom: 100px;
}
.shopCarBody dl {
  margin: 0;
  padding: 0;
  border: 0;
}
.shopCarBody dl dt {
  width: 88%;
  height: 50px;
  line-height: 50px;
  text-align: left;
  display: block;
  margin: 0 auto 20px auto;
  border-bottom: 1px solid #999;
  overflow: hidden;
}

/* 合计、去结算 */
.toPayWrap {
  width: 100%;
  height: 80px;
  background: #fcc36d;
  position: fixed;
  left: 0;
  bottom: 38px;
  border-radius: 15px;
}
.toPayWrap input.allSelect {
  float: left;
  margin: 25px 0 0 20px;
}
.toPayWrap label {
  float: left;
  margin: 22px 0 0 10px;
}
.toPayWrap span {
  float: left;
  margin: 18px 0 0 30px;
  font-size: 22px;
}
.toPayWrap p {
  float: right;
  margin: 15px 12px 0 0;
  background: #915904;
  border-radius: 20px;
  padding: 10px 15px;
  color: #fff;
}
</style>
