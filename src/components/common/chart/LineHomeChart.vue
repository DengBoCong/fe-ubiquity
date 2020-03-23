<template>
  <v-chart :options="linehome" :init-options="initOptions" ref="linehome" autoresize style="width:100%"/>
</template>

<script>
import echarts from 'echarts'
import $ from 'jquery'
import { getTableData } from '@/api/data'
import ECharts from 'vue-echarts/components/ECharts'
import qs from 'qs'
import linehome from '../../../mock/data/linehome'

export default {
  name: "LineHomeChart",
  components: {
    'v-chart': ECharts
  },
  data () {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true })
    return {
        options,
        linehome,
        initOptions: {
          renderer: options.renderer || 'canvas'
        },
    }
  }
}
</script>

<style>

</style>