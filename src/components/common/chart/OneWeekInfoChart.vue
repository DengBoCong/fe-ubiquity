<template>
  <v-chart :options="oneweekinfodatatrend" :init-options="initOptions" ref="oneweekinfodatatrend" autoresize style="width:100%"/>
</template>

<script>
import echarts from 'echarts'
import $ from 'jquery'
import { getTableData } from '@/api/data'
import ECharts from 'vue-echarts/components/ECharts'
import qs from 'qs'
import oneweekinfodatatrend from '../../../mock/data/oneweekinfodatatrend'

// 点击事件
 echarts.on('click', function(params) {
   if (params.componentType === 'series' && params.seriesType === 'line') {

     var dataIndex = params.dataIndex;
     echarts.setOption({
       series: [
       {
     name: '每日跑步指标分布与比较',
     type: 'radar',
     symbolSize: 0,
     data: [{
       name: '平均指标',
       value: radarDataAvg[dataIndex],
       itemStyle: {
         normal: {
           color: '#f8d351',
         }
       },
       lineStyle: {
         normal: {
           opacity: 0,
         }
       },
       areaStyle: {
         normal: {
           color: '#f8d351',
           shadowBlur: 25,
           shadowColor: 'rgba(248,211,81,.3)',
           shadowOffsetX: 0,
           shadowOffsetY: -10,
           opacity: 1
         }
       },
     }, {
       name: '我的指标',
       value: radarData[dataIndex],
       itemStyle: {
         normal: {
           color: '#43dfa2',
         }
       },
       lineStyle: {
         normal: {
           opacity: 0,
         }
       },
       areaStyle: {
         normal: {
           color: color.linearGtoB,
           shadowBlur: 15,
           shadowColor: 'rgba(0,0,0,.2)',
           shadowOffsetX: 0,
           shadowOffsetY: 5,
           opacity: .8
         }
       },
     }]
   }]
     })
   }
 });

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
  }
}
</script>

<style>

</style>