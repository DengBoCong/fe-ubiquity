<template>
  <v-chart :options="map" :init-options="initOptions" ref="map" autoresize style="width:100%"/>
</template>

<script>
import echarts from 'echarts'
import $ from 'jquery'
import { getTableData } from '@/api/data'
import ECharts from 'vue-echarts/components/ECharts'
// import map from '../../../mock/data/map'

// built-in theme
import qs from 'qs'
// import 'echarts/theme/dark'
// import theme from '../../../mock/data/theme.json'
// import chinaMap from '../../../mock/data/chinaMap.json'
// import chinaMapOutline from '../../../mock/data/chinaMapOutline.json'
// ECharts.registerMap('chinaMap', chinaMap);
// ECharts.registerMap('chinaMapOutline', chinaMapOutline);
// ECharts.registerTheme('ovilia-green', theme)
import map from '../../../mock/data/map1'
import china from '../../../assets/data/data.json'

ECharts.registerMap('china', china);

export default {
  name: "ChinaMapInfoChart",
  components: {
    'v-chart': ECharts
  },
  data () {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true })
    return {
        options,
        map,
        initOptions: {
          renderer: options.renderer || 'canvas'
        },
    }
  }
}
</script>

<style>

</style>