<template>
  <el-drawer
    title=""
    :visible.sync="flag"
    :direction="direction"
    :before-close="handleClose"
    :with-header="false"
    :size="drawerSize">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="(item, index) in routeArray" :key="index">
        <el-image
          style="width: 100%; height: 100%"
          :src="item.value"
          fit="fill"
          @click="reTo(index)">
        </el-image>
        <!-- <h3 class="medium">{{ item }}</h3> -->
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
      flag: false,
      count: 0,
      direction: 'ttb',
      drawerSize: "350px",
      routeArray: [
        {
          id: 1,
          name: "crowdDensity",
          value: "https://img-blog.csdnimg.cn/20200323171400768.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70"
        },
        {
          id: 2,
          name: "dataReport",
          value: "https://img-blog.csdnimg.cn/20200323171425633.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70"
        },
        {
          id: 3,
          name: "dataTrend",
          value: "https://img-blog.csdnimg.cn/20200323171448389.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70"
        },
        {
          id: 4,
          name: "illness",
          value: "https://img-blog.csdnimg.cn/20200323171515251.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70"
        },
        {
          id: 5,
          name: "journey",
          value: "https://img-blog.csdnimg.cn/20200323171535391.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70"
        },
        {
          id: 6,
          name: "personalAnalysis",
          value: "https://img-blog.csdnimg.cn/20200223222435463.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70"
        },
        {
          id: 7,
          name: "tipMode",
          value: "https://img-blog.csdnimg.cn/20200323171556859.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70"
        }
      ]
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
    reTo(index) {
      this.$router.push({
        name: this.routeArray[index].name
      })
    }
  },
  computed: {
    // idDrawer: function() {
    //   console.log("来了")
    //   if(this.drawer === flag)
    //     flag = false
    //   else flag = true
    // }
    // isDrawer: {
      // get: function () {
      //   return this.drawer
      // },
      // set: function (newValue) {
      //   console.log(newValue)
      //   return false
      // }
    // }
    // }
  },
  watch: {
    drawer(val) {
      this.flag = true
    }
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