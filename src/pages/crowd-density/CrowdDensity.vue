<template>
  <MainFrame v-on:openDrawer="getDrawer">
    <template v-slot:drawer>
      <Drawer :drawer="drawer"></Drawer>
    </template>
    <template v-slot:sidebar>
      <CrowdSideBar></CrowdSideBar>
    </template>
    <template v-slot:topbar>
      <TopBar></TopBar>
    </template>
    <template v-slot:scrollbar>
      <ScrollBar>
        <dv-decoration-10 style="width:100%;" />
        <el-container>
          <Border10 :marginSize="1.5" :widthSize="69" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <TopLineChart></TopLineChart>
            </template>
          </Border10>
          <Border10 :marginSize="1.5" :widthSize="27" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <dv-scroll-board :config="config" style="width:92%;height:92%;color:#000000;margin:3.5%" />
            </template>
          </Border10>
        </el-container>
        <el-container>
          <Border10 :marginSize="1.5" :widthSize="23.75" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <MiddleLeftChart></MiddleLeftChart>
            </template>
          </Border10>
          <Border10 :marginSize="1.5" :widthSize="42.5" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <MapCrowdDensity></MapCrowdDensity>
            </template>
          </Border10>
          <Border10 :marginSize="1.5" :widthSize="23.75" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <MiddleRightChart></MiddleRightChart>
            </template>
          </Border10>
        </el-container>
        <el-container>
          <Border10 :marginSize="1.5" :widthSize="96" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <BottomRaderChart></BottomRaderChart>
            </template>
          </Border10>
        </el-container>
      </ScrollBar>
    </template>
    <template v-slot:footer>
      <CopyRight></CopyRight>
    </template>
  </MainFrame>
</template>

<script>
  // import {getHomeMultidata} from "network/home"
  import MainFrame from 'components/context/main-frame/MainFrame'
  import Drawer from 'components/common/drawer/Drawer'
  import CrowdSideBar from './CrowdSideBar'
  import TopBar from 'components/context/topbar/TopBar'
  import ScrollBar from 'components/context/scrollbar/ScrollBar'
  import Card from 'components/context/card/Card'
  import CopyRight from 'components/context/copyright/CopyRight'
  import ErrorBarInfoChart from 'components/common/chart/ErrorBarInfoChart'
  import Border10 from 'components/context/border/Border10'
  import Border8 from 'components/context/border/Border8'
  import BottomRaderChart from './BottomRaderChart'
  import MiddleRightChart from './MiddleRightChart'
  import TopLineChart from './TopLineChart.vue'
  import MiddleLeftChart from './MiddleLeftChart.vue'
  import MapCrowdDensity from './MapCrowdDensity.vue'

  import G6 from '@antv/g6'

  export default {
    name: "CrowdDensity",
    components: {
      MainFrame,
      Drawer,
      CrowdSideBar,
      TopBar,
      ScrollBar,
      Card,
      CopyRight,
      ErrorBarInfoChart,
      Border10,
      Border8,
      BottomRaderChart,
      MiddleRightChart,
      TopLineChart,
      MiddleLeftChart,
      MapCrowdDensity,
    },
    data() {
      return {
        drawer: false,
        loading: false,
        config: {
          data: [
            ['<span style="color:#37a2da;">中山公园东站(公交站)</span>', '685', '00:16:01'],
            ['家具广场站(公交站)', '<span style="color:#ff9f7f;">67</span>', '00:16:01'],
            ['北市场西站(公交站)', '<span style="color:#e7bcf3;">61</span>', '00:16:01'],
            ['和平大街八纬路站(公交站)', '<span style="color:#32c5e9;">123</span>', '00:16:01'],
            ['保工街南十四路站(公交站)', '65', '00:16:01'],
            ['北行站(公交站)', '<span style="color:#e062ae;">65</span>', '00:16:01'],
            ['<span style="color:#e690d1;">中山广场东站(公交站)</span>', '62', '00:16:01'],
            ['中华路太原街站(公交站)', '102', '00:16:01'],
            ['北三路圣工街(公交站)', '<span style="color:#9fe6b8;">95</span>', '00:16:01'],
            ['<span style="color:#ffdb5c;">马路湾北站(公交站)</span>', '93', '00:16:01'],
            ['龙之梦旅游度假中心(公交站)', '<span style="color:#e062ae;">55</span>', '00:16:01'],
            ['<span style="color:#e690d1;">霁虹站(公交站)</span>', '54', '00:16:01'],
            ['北市场西站(公交站)', '48', '00:16:01'],
            ['北三路圣工街(公交站)', '<span style="color:#9fe6b8;">95</span>', '00:16:01'],
            ['<span style="color:#ffdb5c;">马路湾北站(公交站)</span>', '93', '00:16:01'],
          ],
          columnWidth: [200],
          align: ['center'],
          evenRowBGC: 'transparent',
          oddRowBGC:'#E7F9FF',
        }
      }
    },
    computed: {
      // getDrawer(data) {
      //   this.drawer = data.drawer
      // },
    },
    methods: {
      getDrawer(data) {
        this.drawer = data.drawer
      },
      openFullScreen() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      },
    },
  }
</script>

<style>

</style>