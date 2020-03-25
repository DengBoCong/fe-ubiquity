<template>
  <v-chart 
  :options="tripmode" 
  :init-options="initOptions" 
  ref="tripmode" 
  autoresize style="width:98%;margin-top:0%"/>
</template>

<script>
import echarts from 'echarts'
import $ from 'jquery'
import { getTableData } from '@/api/data'
import ECharts from 'vue-echarts/components/ECharts'
import qs from 'qs'
import tripmode from './jstopleftchart.js'

export default {
  name: "TopLeftChart",
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