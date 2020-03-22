<template>
  <dv-border-box-8 :style="{ margin: marginSize + '%', width: widthSize + '%', height: heightSize}" :color="color" style="height:500px;">
    <slot name="borderContent"></slot>
  </dv-border-box-8>
</template>

<script>
export default {
  name: "Border8",
  components: {
    //
  },
  data() {
    return {
      //
    }
  },
  methods: {
    //
  },
  props: {
    // cardSize: Number, 
    marginSize: {
      type: Number,
      default: ()=> 0
    },
    widthSize: {
      type: Number,
      default: ()=> 100
    },
    heightSize: {
      type: String,
      default: ()=> "auto"
    },
    color: {
      type: Array,
      default: ()=>['red', 'green']
    },
  }
}
</script>

<style>
/* .border-card {
    margin: 2.5%;
  } */
</style>