<template>
  <v-chart 
  :options="illness" 
  :init-options="initOptions" 
  ref="illness" 
  autoresize style="width:95%;margin-top:25px"/>
</template>

<script>
import echarts from 'echarts'
import $ from 'jquery'
import { getTableData } from '@/api/data'
import ECharts from 'vue-echarts/components/ECharts'
import qs from 'qs'
import illness from './jsmiddleleftchart.js'

export default {
  name: "MiddleLeftChart",
  components: {
    'v-chart': ECharts
  },
  data () {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true })
    return {
        options,
        illness,
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