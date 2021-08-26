import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* 重置vant样式 */
import '@/assets/reset_vant.css'

import {
    Button,
    Swipe,
    SwipeItem,
    CountDown,
    Tab,
    Tabs,
    Tabbar,
    TabbarItem,
    Sidebar,
    SidebarItem,
    NavBar,
    Grid,
    GridItem,
    Overlay
} from 'vant';


const app = createApp(App);
// 按需引入vant控件
app.use(Button).use(Swipe).use(SwipeItem).use(CountDown).use(Tab)
    .use(Tabs).use(Tabbar).use(TabbarItem).use(Sidebar)
    .use(SidebarItem).use(NavBar).use(Grid).use(GridItem).use(Overlay);
// 页面挂载
app.use(store).use(router).mount('#app')