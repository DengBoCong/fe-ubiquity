<template>
  <div id="home"></div>
</template>

<script>
  import {getHomeMultidata} from "network/home"

  export default {
    name: "Home",
    components: {

    },
    data() {
      return {
        result: null,
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.result = res;
      });
    }
  }
</script>

<style>

</style>