<template>
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
    <div class="floatbutton">
      UP
    </div>
  </el-backtop>
</template>

<script>
export default {
  name: "FloatButton",
  components: {
    //
  },
  data() {
    return {
      //
    };
  },
  methods: {
    //
  }
}
</script>

<style>
  .floatbutton{
    height: 100%;
    width: 100%;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0,0,0, .12);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
  }
</style>