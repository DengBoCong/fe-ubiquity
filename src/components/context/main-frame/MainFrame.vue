<template>
  <el-container style="width:100%; height: 100%;">
    <slot name="drawer"></slot>
    <el-aside style="width:16%">
      <el-container>
        <el-header style="padding:5px;">
          <el-button @click="handleClick" type="primary" style="width:100%;height:100%;" plain>
            切换模块
          </el-button>
        <!-- <el-avatar shape="square" :size="100" fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar> -->
        </el-header>
        <el-main style="padding:0;">
          <slot name="sidebar"></slot>
        </el-main>
      </el-container>
    </el-aside>
    <el-container>
      <el-header style="padding:0;">
        <slot name="topbar"></slot>
      </el-header>
      <el-main style="height:100%;width:100%;padding:0;"><!-- overflow-x:hidden;overflow-y:hidden; -->
        <slot name="scrollbar"></slot>
      </el-main>
      <el-footer style="padding:0;">
        <slot name="footer"></slot>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "MainFrame",
  components: {
    //
  },
  data() {
    return {
      count: 0,
      flag: false,
      // fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    }
  },
  methods: {
    handleClick() {
      // if(count === 0){
      //   flag = true
      //   count++
      // }else {
      //   flag = !flag
      // }
      this.flag = !this.flag
      this.$emit('openDrawer', {'drawer': this.flag});
    }
  }
}
</script>

<style>

</style>