<template>
  <v-chart 
  :options="linebaruserdatatrend" 
  :init-options="initOptions" 
  ref="linebaruserdatatrend" 
  autoresize style="width:100%;margin:50px"/>
</template>

<script>
import echarts from 'echarts'
import $ from 'jquery'
import { getTableData } from '@/api/data'
import ECharts from 'vue-echarts/components/ECharts'
import qs from 'qs'
import linebaruserdatatrend from '../../../mock/data/linebaruserdatatrend'




export default {
  name: "LineBarUserDataTrend",
  components: {
    'v-chart': ECharts
  },
  data () {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true })
    return {
        options,
        linebaruserdatatrend,
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