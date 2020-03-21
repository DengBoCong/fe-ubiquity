<template>
  <dv-border-box-10 :style="{ margin: marginSize + '%'}" :color="color">
    <slot name="borderContent"></slot>
  </dv-border-box-10>
</template>

<script>
export default {
  name: "Border10",
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