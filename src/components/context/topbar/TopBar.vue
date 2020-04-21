<template>
  <el-menu
    :default-active="activeIndex2" 
    class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect">
    <el-submenu index="1" style="float:right;">
      <template slot="title"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></template>
      <el-menu-item index="userInfo">个人信息</el-menu-item>
      <el-menu-item index="messages">消息中心</el-menu-item>
      <el-menu-item index="logInfo">日志信息</el-menu-item>
      <el-menu-item index="logout">退出登录</el-menu-item>
    </el-submenu>
    <el-menu-item index="4" style="float:right;"><a href="#" target="_blank">订单管理</a></el-menu-item>
    <el-submenu index="2" style="float:right;">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">语音模式</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="home" style="float:right;">数据中心</el-menu-item>
    <el-menu-item index="3" style="float:right;" disabled>
      <el-date-picker
        v-model="value2"
        align="right"
        type="date"
        @change="chooseTime"
        placeholder="2018-10-03"
        :picker-options="pickerOptions">
      </el-date-picker>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "TopBar",
  components: {
    //
  },
  inject:['reload'],
  data() {
    return {
      activeIndex2: '1',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }],
        onPick(time) {
          console.log("time.getTime()");
          console.log(time.getTime());
        },
      },
      value2: '',
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
        case 'home': this.$router.push({
                      name: this.$config.homeName
                    })
          break
      }
    },
    chooseTime(time) {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      if(time.getTime() < 1538496000000 || time.getTime() > 1538582400000){
        this.$notify({
          title: '该时段数据为空',
          message: '非常抱歉，您选择的 '+time + ' 数据为空，如有疑问，请咨询管理员'
        });
      }else {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.7)'
        });
        setTimeout(() => {
          loading.close();
          this.reload();
        }, 2000);
      }
    },
  }
}
</script>

<style>

</style>