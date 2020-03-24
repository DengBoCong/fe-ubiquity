<template>
  <v-chart :options="errorbarinfo" 
  :init-options="initOptions" 
  ref="errorbarinfo" 
  autoresize style="width:100%;margin:20px"/>
</template>

<script>
import echarts from 'echarts'
import $ from 'jquery'
import { getTableData } from '@/api/data'
import ECharts from 'vue-echarts/components/ECharts'
import qs from 'qs'
import errorbarinfo from '../../../mock/data/errorbarinfo'

export default {
  name: "ErrorBarInfoChart",
  components: {
    'v-chart': ECharts
  },
  data () {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true })
    return {
        options,
        errorbarinfo,
        initOptions: {
          renderer: options.renderer || 'canvas'
        },
    }
  }
}
</script>

<style>

</style>