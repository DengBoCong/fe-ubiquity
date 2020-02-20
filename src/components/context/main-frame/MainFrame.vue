<template>
  <el-container style="width:1920px; height: 1080px;">
    <slot name="drawer"></slot>
    <el-aside width="300px">
      <div class="block">
        <el-button @click="handleClick" type="primary" style="margin-left: 16px;">
          点我打开
        </el-button>
        <el-avatar shape="square" :size="100" fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
      </div>
      <div>
        <slot name="sidebar"></slot>
      </div>
    </el-aside>
    <el-container>
      <el-header style="padding:0;">
        <slot name="topbar"></slot>
      </el-header>
      <el-main style="height:100%;width:100%;padding:0;"><!-- overflow-x:hidden;overflow-y:hidden; -->
        <slot name="scrollbar"></slot>
      </el-main>
      <el-footer style="padding:0">
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
      // fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    }
  },
  methods: {
    handleClick() {
      this.$emit('openDrawer', {'drawer': true});
    }
  }
}
</script>

<style>

</style>