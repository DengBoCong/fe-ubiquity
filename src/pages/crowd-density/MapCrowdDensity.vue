<template>
  <v-chart 
  :options="mapcrowddensity" 
  :init-options="initOptions" 
  ref="mapcrowddensity" 
  autoresize style="width:100%;margin:0px"/>
</template>

<script>
import echarts from 'echarts'
import $ from 'jquery'
import { getTableData } from '@/api/data'
import ECharts from 'vue-echarts/components/ECharts'
import qs from 'qs'
import mapcrowddensity from './jsmapcrowddensity.js'

// ECharts.hideLoading();

export default {
  name: "MapCrowdDensity",
  components: {
    'v-chart': ECharts
  },
  data () {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true })
    return {
        options,
        mapcrowddensity,
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