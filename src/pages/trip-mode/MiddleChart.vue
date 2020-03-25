<template>
  <v-chart 
  :options="tripmode" 
  :init-options="initOptions" 
  ref="tripmode" 
  autoresize style="width:96%;margin:2%"/>
</template>

<script>
import echarts from 'echarts'
import $ from 'jquery'
import { getTableData } from '@/api/data'
import ECharts from 'vue-echarts/components/ECharts'
import qs from 'qs'
import tripmode from './jsmiddlechart.js'

export default {
  name: "MiddleChart",
  components: {
    'v-chart': ECharts
  },
  data () {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true })
    return {
        options,
        tripmode,
        initOptions: {
          renderer: options.renderer || 'canvas'
        },
    }
  },
  methods: {
    //
  }
}
</script>

<style>

</style>