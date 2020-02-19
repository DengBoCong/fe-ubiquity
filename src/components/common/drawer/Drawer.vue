<template>
  <el-drawer
    title=""
    :visible.sync="drawer"
    :direction="direction"
    :before-close="handleClose"
    :with-header="false"
    :size="drawerSize">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </el-drawer>
</template>

<script>
import FloatButton from 'components/context/float-button/FloatButton'
export default {
  name: "Drawer",
  components: {
    FloatButton,
  },
  data() {
    return {
      direction: 'ttb',
      drawerSize: "350px",
    };
  },
  props: {
    drawer: Boolean 
  },
  methods: {
    handleClose(done) {
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => {});
      done();
    },
  },
  computed: {
    // isDrawer: {
    //   get: function () {
    //     if(this.b){
    //       console.log(this.drawer)
          
    //       return this.drawer
    //     }else {
    //       this.b = true
    //       return false
    //     }
    //   },
    //   set: function (newValue) {
    //     console.log(newValue)
    //     this.b = false
    //   }
    // }
  }
}
</script>

<style>
/* 走马灯 */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>