<template>
  <v-chart 
  :options="crowddensity" 
  :init-options="initOptions" 
  ref="crowddensity" 
  autoresize style="width:100%;margin-top:50px"/>
</template>

<script>
import echarts from 'echarts'
import $ from 'jquery'
import { getTableData } from '@/api/data'
import ECharts from 'vue-echarts/components/ECharts'
import qs from 'qs'
import crowddensity from './jsbottomraderchart.js'

export default {
  name: "BottomRaderChart",
  components: {
    'v-chart': ECharts
  },
  data () {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true })
    return {
        options,
        crowddensity,
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