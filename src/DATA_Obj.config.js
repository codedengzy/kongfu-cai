let pic_url = 'http://www.laoshang01.com/vue3_resources/v3_demo1_pic/';

const DATA_Obj = {
    // 首页header轮播图的图片
    headerImgs: [pic_url + '1.jpg', pic_url + '2.jpg', pic_url + '3.jpg'],

    // 限时秒杀，菜品列表
    seckill_goods: [{
        goods_name: '手撕风干牛肉',
        price: 55.9,
        origin_price: 75,
        goods_img: pic_url + '1.jpg'
    }, {
        goods_name: '菲力牛排',
        price: 84.9,
        origin_price: 75,
        goods_img: pic_url + '2.jpg'
    }, {
        goods_name: '手撕风干牛肉',
        price: 55.9,
        origin_price: 75,
        goods_img: pic_url + '3.jpg'
    }, {
        goods_name: '黄米凉糕',
        price: 29.9,
        origin_price: 75,
        goods_img: pic_url + '4.png'
    }, {
        goods_name: '牛腩肉',
        price: 79.9,
        origin_price: 75,
        goods_img: pic_url + '5.png'
    }, {
        goods_name: '手工牛肉包子',
        price: 45.9,
        origin_price: 75,
        goods_img: pic_url + '6.png'
    }, {
        goods_name: '德州扒鸡',
        price: 69,
        origin_price: 75,
        goods_img: pic_url + '7.png'
    }],
    // 热销TOP，导航条
    goodsNavHotData: ['早餐/主食', '功夫大菜', '多样一人食', '热卖', '各种包子', '火锅', '水煮鱼'],
    // 热销导航条和商品数据
    goodsHotData: [{
            nav_title: '早餐/主食',
            goods_Obj: [{
                goods_name: '赠鱼鱼|香辣羊蝎子',
                goods_txt: '西贝第一功夫菜！销量NO.1',
                goods_img: pic_url + '1.jpg',
                num: '已售6.0万盒',
                price: 169
            }, {
                goods_name: '赠鱼鱼|蒙古牛大骨',
                goods_txt: '过足肉瘾，贴骨肉就是香！',
                goods_img: pic_url + '2.jpg',
                num: '已售4173盒',
                price: 169
            }, {
                goods_name: '老坛子酸菜鱼',
                goods_txt: '限时 ！酸辣过瘾',
                goods_img: pic_url + '3.jpg',
                num: '已售7815组',
                price: 99.9
            }]
        }, {
            nav_title: '多样一人食',
            goods_Obj: [{
                goods_name: '番茄牛腩',
                goods_txt: '酸甜开胃，拌饭特香',
                goods_img: pic_url + '4.png',
                num: '已售8917组',
                price: 99.9
            }, {
                goods_name: '手工呛面馒头(6个)',
                goods_txt: '手工揉面，越嚼越香',
                goods_img: pic_url + '5.png',
                num: '已售2.4万袋',
                price: 19
            }]
        }, {
            nav_title: '功夫大菜',
            goods_Obj: [{
                goods_name: '手撕风干牛肉',
                goods_txt: '内蒙特产，当地人都爱',
                goods_img: pic_url + '6.png',
                num: '已售10.7万盒',
                price: 55.9
            }, {
                goods_name: '牛腱子牛腩组合',
                goods_txt: '内蒙草原牛肉，鲜嫩',
                goods_img: pic_url + '7.png',
                num: '已售4.5万组',
                price: 149.9
            }]
        }

    ]
}

module.exports = DATA_Obj