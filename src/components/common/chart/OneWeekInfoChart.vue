<template>
  <v-chart 
  :options="oneweekinfodatatrend" 
  :init-options="initOptions" 
  ref="oneweekinfodatatrend" 
  autoresize style="width:100%;margin-top:30px;"/>
</template>

<script>
import echarts from 'echarts'
import $ from 'jquery'
import { getTableData } from '@/api/data'
import ECharts from 'vue-echarts/components/ECharts'
import qs from 'qs'
import oneweekinfodatatrend from '../../../mock/data/oneweekinfodatatrend'




export default {
  name: "OneWeekInfoChart",
  components: {
    'v-chart': ECharts
  },
  data () {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true })
    return {
        options,
        oneweekinfodatatrend,
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