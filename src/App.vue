<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Login from 'pages/login/Login'

  export default {
    name: 'App',
    components: {
      Login,
    },
    data() {
      return {

      }
    },
    methods: {
      re() {
        console.log("好了");
        this.$router.push('/login')
      }
    },
    created(){
      if(this.$store.state.locale !=1)
        this.$router.push('/login')
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
</style>
