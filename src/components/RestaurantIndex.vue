<template>
    <div class="">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                <!--  <ul>
                    <li  v-for="route in this.$router.options.routes" :key="route.path">
                        <router-link :to="route.path" >{{route.title}}</router-link> 
                    </li>
                    </ul> -->
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo" 
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router>

                    <el-menu-item 
                    v-for="route in this.$router.options.routes" 
                    :key="route.path"
                    :index="route.path"
                    >
                        <i class="el-icon-setting"></i>
                        <span slot="title">{{route.title}}</span>
                    </el-menu-item>
                </el-menu>
                </el-aside>

                <el-container>
                <el-main>Main</el-main>
                <el-footer><a href="https://element.eleme.cn/#/zh-CN/component/installation" target="_blank">element-ui</a></el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {}
    },
    components: {},
    methods: {}
}
</script>

<style  scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

   .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;   
    min-height: 580px;
  }
  .font2{
      float: left;
  }
  .el-menu{
     min-height: 580px;
     text-align: left;
  }
</style>
