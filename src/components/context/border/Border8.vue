<template>
  <dv-border-box-8 :style="{ margin: marginSize + '%'}" :color="color" style="height:500px;">
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
    marginSize: Number,
    mainColor: String,
    voteColor: String,
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