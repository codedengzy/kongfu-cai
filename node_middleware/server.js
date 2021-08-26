const express = require('express');
const app = express();
let pic_url = 'http://www.laoshang01.com/vue3_resources/v3_demo1_pic/';

app.get('/get_allgoods_sidebar', (req, res) => {
    let _sidebar_id = req.query.sidebar_id;

    let goods_Obj_1 = [{
        goods_name: '赠鱼鱼|香辣羊蝎子',
        goods_txt: '西贝第一功夫菜！销量NO.1',
        goods_img: pic_url + '1.jpg',
        num: '已售6.0万盒',
        price: 169,
        goods_id: 1,
        goods_cartNum: 1
    }, {
        goods_name: '赠鱼鱼|蒙古牛大骨',
        goods_txt: '过足肉瘾，贴骨肉就是香！',
        goods_img: pic_url + '2.jpg',
        num: '已售4173盒',
        price: 169,
        goods_id: 2,
        goods_cartNum: 1
    }, {
        goods_name: '老坛子酸菜鱼',
        goods_txt: '限时 ！酸辣过瘾',
        goods_img: pic_url + '3.jpg',
        num: '已售7815组',
        price: 99.9,
        goods_id: 3,
        goods_cartNum: 1
    }];
    let goods_Obj_2 = [{
        goods_name: '番茄牛腩',
        goods_txt: '酸甜开胃，拌饭特香',
        goods_img: pic_url + '4.png',
        num: '已售8917组',
        price: 99.9,
        goods_id: 4,
        goods_cartNum: 1
    }, {
        goods_name: '手工呛面馒头(6个)',
        goods_txt: '手工揉面，越嚼越香',
        goods_img: pic_url + '5.png',
        num: '已售2.4万袋',
        price: 19,
        goods_id: 5,
        goods_cartNum: 1
    }];
    let goods_Obj_3 = [{
        goods_name: '手撕风干牛肉',
        goods_txt: '内蒙特产，当地人都爱',
        goods_img: pic_url + '6.png',
        num: '已售10.7万盒',
        price: 55.9,
        goods_id: 6,
        goods_cartNum: 1
    }, {
        goods_name: '牛腱子牛腩组合',
        goods_txt: '内蒙草原牛肉，鲜嫩',
        goods_img: pic_url + '7.png',
        num: '已售4.5万组',
        price: 149.9,
        goods_id: 7,
        goods_cartNum: 1
    }];
    if (_sidebar_id == 0) {
        res.send(goods_Obj_1);
    } else if (_sidebar_id == 1) {
        res.send(goods_Obj_2);
    } else if (_sidebar_id == 2) {
        res.send(goods_Obj_3);
    }
});
app.listen(4567, () => {
    console.log('4567,中间件启动');
});