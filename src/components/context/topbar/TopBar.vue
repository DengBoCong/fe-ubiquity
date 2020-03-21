<template>
  <el-menu
    :default-active="activeIndex2" 
    class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect">
    <el-submenu index="1" style="float:right;">
      <template slot="title"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></template>
      <el-menu-item index="userInfo">个人信息</el-menu-item>
      <el-menu-item index="logInfo">日志信息</el-menu-item>
      <el-menu-item index="logout">退出登录</el-menu-item>
    </el-submenu>
    <el-menu-item index="4" style="float:right;"><a href="#" target="_blank">订单管理</a></el-menu-item>
    <el-menu-item index="3" style="float:right;" disabled>消息中心</el-menu-item>
    <el-submenu index="2" style="float:right;">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="6" style="float:right;">处理中心</el-menu-item>
  </el-menu>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "TopBar",
  components: {
    //
  },
  data() {
    return {
      activeIndex2: '1',
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    logout () {
      this.handleLogOut().then(() => {
        this.$router.push({
          name: 'login'
        })
      })
    },
    handleSelect(key, keyPath) {
      switch(key){
        case 'userInfo': console.log(key)
          break
        case 'logInfo': console.log(key)
          break
        case 'logout': this.logout()
          break
      }
    },
  }
}
</script>

<style>

</style>