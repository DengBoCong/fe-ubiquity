<template>
  <el-card class="box-card" style="width:100%;margin:0;">
    <el-popover
      placement="top-start"
      width="400"
      trigger="click">
      <p>个人喜欢钻研技术，主要倒腾Java和视觉算法，前端也会玩一下。</p>
      <el-link target="_blank" href="https://github.com/DengBoCong" type="primary">GitHub</el-link>--目前public的项目不多，主要private自己玩<br>
      <el-link target="_blank" href="https://dengbocong.blog.csdn.net/" type="primary">CSDN社区</el-link>--目前是博客专家，欢迎关注和留言
      <el-button type="text" slot="reference" style="margin-left:35%;margin-top:-10px;">DengBoCong版权所有，保留一切权利.点击查看作者信息</el-button>
    </el-popover>
  </el-card>
</template>

<script>
export default {
  name: "CopyRight",
  components: {
    //
  },
}
</script>

<style>

</style>