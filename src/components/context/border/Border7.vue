<template>
  <dv-border-box-7 :style="{ margin: marginSize + '%', width: widthSize + '%', height: heightSize}" :color="color">
    <slot name="borderContent"></slot>
  </dv-border-box-7>
</template>

<script>
export default {
  name: "Border7",
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