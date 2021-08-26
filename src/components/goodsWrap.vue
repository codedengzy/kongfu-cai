<template>
    <dd v-for="n in obj">
        <input :checked="isCheckedBox" @click="checkBoxGoodsBtn(n)" type="checkbox" class="selectGoodsinput" />
        <img class="goodsImg" :src="n.goods_img" />
        <h1>{{ n.goods_name }}</h1>
        <p>{{ n.goods_txt }}</p>
        <p>￥{{ n.price }}</p>
        <!-- 商品加减按钮 -->
        <plusMinusCart :sc_GoodsObj="n"></plusMinusCart>
      </dd>
</template>
<script>
import plusMinusCart from "@/components/plusMinusCart";
import {reactive, ref,watch} from 'vue'

export default({
    name:"goodsWrap",
    props:{
        gcObj:Object,
        isCheckedBox:Boolean
    },
    emits:['checkgoods-event'],
    setup(props,{emit}) {
        // console.log(props.isCheckedBox);
        let obj=reactive({});
        obj=props.gcObj;
        let isCheckedBox=ref(true);
        // 
        // 监听是否选中
        watch(props,(new_val,old_val)=>{
            // console.log(new_val.isCheckedBox);
            isCheckedBox.value=props.isCheckedBox;
        });
        // 全选按钮是否选中
        let isAllChecked=ref(true);
        // 事件对象
        let methodsObj={
            checkBoxGoodsBtn(n){
                n.isCheck=n.isCheck?false:true;
                // 找到对应菜品的id修改他的isCheck状态
                for (let i = 0; i < obj.length; i++) {
                    if (obj[i].goods_id==n.goods_id) {
                        obj[i].isCheck=n.isCheck;
                    }
                }
                // 如果有一个商品的isCheck为false则全选按钮为false
                for (let i = 0; i < obj.length; i++) {
                    if (obj[i].isCheck!=true) {
                        isAllChecked.value=false;
                        break;
                    }else{
                        isAllChecked.value=true;
                    }
                }
                // 自定义事件
                emit('checkgoods-event',isAllChecked.value);
            }
        }
        return{
            obj,
            isCheckedBox,
            ...methodsObj
        }
    },
    components:{
        plusMinusCart
    }
})
</script>
<style lang="less" scoped>
.shopCarBody dl dd {
  // height:100px;
  overflow: hidden;
  padding-left: 160px;
  position: relative;
  display: block;
  margin: 0 auto;
}
.shopCarBody dl dd input.selectGoodsinput {
  position: absolute;
  top: 10px;
  left: 10px;
}
.shopCarBody dl dd img.goodsImg {
  position: absolute;
  top: 10px;
  left: 45px;
  width: 100px;
  border-radius: 10px;
}

.shopCarBody dl dd h1,
.shopCarBody dl dd p {
  text-align: left;
}
</style>
