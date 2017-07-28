import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueAMap from 'vue-amap';
import Loadmore from 'vue-loadmore';
import RegionPicker from 'vue-region-picker'
import REGIOiN_DATA from 'china-area-data'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
Vue.use(VueAMap);
Vue.use(Loadmore)
Vue.use(Router)
Vue.use(VueAwesomeSwiper)
Vue.use(RegionPicker, {
  region: REGIOiN_DATA
})

export default new Router({
  routes: [
//  {
//    path: '/',
//    name: 'Hello',
//    component: Hello
//  }
  ]
})
