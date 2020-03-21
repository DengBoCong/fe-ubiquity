<template>
  <dv-border-box-12 :style="{ margin: marginSize + '%'}">
    <slot name="borderContent"></slot>
  </dv-border-box-12>
</template>

<script>
export default {
  name: "Border12",
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
    marginSize: Number,
  }
}
</script>

<style>
/* .border-card {
    margin: 2.5%;
  } */
</style>