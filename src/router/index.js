import Vue from 'vue'
import Router from 'vue-router'
import RestaurantIndex from '@/components/RestaurantIndex'
import CateringShoppingCart from '@/components/CateringShoppingCart'
import CateringOrderPage from '@/components/CateringOrderPage'
import CateringOrderDetailsPage from '@/components/CateringOrderDetailsPage'
import MenuDetailsPage from '@/components/MenuDetailsPage'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/RestaurantIndex",component:RestaurantIndex,title:'购物车管理首页'},
    {path:"/CateringShoppingCart",component:CateringShoppingCart,title:'购物车页面'},
    {path:"/CateringOrderPage",component:CateringOrderPage,title:'订单页面'},
    {path:"/CateringOrderDetailsPage",component:CateringOrderDetailsPage,title:'订单详情页面'},
    {path:"/MenuDetailsPage",component:MenuDetailsPage,title:'菜单详情页面'},
  ]
})
