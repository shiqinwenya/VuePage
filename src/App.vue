<template>
  <div id="app">
    <component :is="'RestaurantIndex'"></component>
  </div>
</template>

<script>
import RestaurantIndex from '@/components/RestaurantIndex'

export default {
  name: 'App',
  components:{
    RestaurantIndex,
  },
}
</script>

<style>
.el-row {
    margin-bottom: 20px;
  }

  .font1{
   line-height: 40px;
   text-align: right;
   padding-right: 10px;
}
</style>
