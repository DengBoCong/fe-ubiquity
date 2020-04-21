<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
  import Login from 'pages/login/Login'

  export default {
    name: 'App',
    provide () {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。                                             
        return {
            reload: this.reload                                              
        }
    },
    components: {
      Login,
    },
    data() {
      return {
        isRouterAlive: true,
      }
    },
    methods: {
      re() {
        console.log("好了");
        this.$router.push('/login')
      },
      reload () {
          this.isRouterAlive = false;            //先关闭，
          this.$nextTick(function () {
              this.isRouterAlive = true;         //再打开
          }) 
      }
    },
    created(){
      
      // if(this.$store.state.locale !=1)
      //   this.$router.push('/login')
    }
  }
</script>

<style lang="less">
  @import "assets/css/base.css";
  .size{
    width: 100%;
    height: 100%;
  }
  html,body{
    .size;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  #app {
    .size;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>
