<template>
  <el-card shadow="always" class="box-card" :style="{ width: cardSize + 'px'}">
    <div slot="header" class="clearfix">
      <slot name="headerExplain"></slot>
      <slot name="headerOperator"></slot>
    </div>
    <slot name="cardContent"></slot>
  </el-card>
</template>

<script>
export default {
  name: "Card",
  components: {
    //
  },
  data() {
    return {
      //cardSize: 0,
    }
  },
  methods: {
    // getCardSize() {
    //   console.log(this.cardSize)
    //   return "width:" + this.cardSize + "px;"
    // }
  },
  props: {
    cardSize: Number, 
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin: 30px;
  }
</style>