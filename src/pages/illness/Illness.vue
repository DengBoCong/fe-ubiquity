<template>
  <MainFrame v-on:openDrawer="getDrawer">
    <template v-slot:drawer>
      <Drawer :drawer="drawer"></Drawer>
    </template>
    <template v-slot:sidebar>
      <HomeSideBar></HomeSideBar>
    </template>
    <template v-slot:topbar>
      <TopBar></TopBar>
    </template>
    <template v-slot:scrollbar>
      <ScrollBar>
        <dv-decoration-10 style="width:100%;" />
        <el-container>
          <Border10 :marginSize="1.5" :widthSize="69" :heightSize="heightTL" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <TopLeftChart></TopLeftChart>
            </template>
          </Border10>
          <Border10 :marginSize="1.5" :widthSize="27" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <dv-scroll-board :config="config" style="width:92%;height:92%;color:#000000;margin:3.5%" />
            </template>
          </Border10>
        </el-container>
        <el-container>
          <Border10 :marginSize="1.5" :widthSize="35" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <MiddleLeftChart></MiddleLeftChart>
            </template>
          </Border10>
          <Border10 :marginSize="1.5" :widthSize="61" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <MiddleRightChart></MiddleRightChart>
            </template>
          </Border10>
        </el-container>
        <el-container>
          <Border10 :marginSize="1.5" :widthSize="97" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <BottomChart></BottomChart>
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
  import HomeSideBar from 'components/context/sidebar/SideBar'
  import TopBar from 'components/context/topbar/TopBar'
  import ScrollBar from 'components/context/scrollbar/ScrollBar'
  import Card from 'components/context/card/Card'
  import CopyRight from 'components/context/copyright/CopyRight'
  import ErrorBarInfoChart from 'components/common/chart/ErrorBarInfoChart'
  import Border10 from 'components/context/border/Border10'
  import Border8 from 'components/context/border/Border8'
  import TopLeftChart from './TopLeftChart.vue'
  import MiddleRightChart from './MiddleRightChart'
  import MiddleLeftChart from './MiddleLeftChart.vue'
  import BottomChart from './BottomChart.vue'
  // import MapCrowdDensity from './MapCrowdDensity.vue'

  import G6 from '@antv/g6'

  export default {
    name: "Illness",
    components: {
      MainFrame,
      Drawer,
      HomeSideBar,
      TopBar,
      ScrollBar,
      Card,
      CopyRight,
      ErrorBarInfoChart,
      Border10,
      Border8,
      TopLeftChart,
      MiddleRightChart,
      MiddleLeftChart,
      BottomChart,
      // MapCrowdDensity,
    },
    data() {
      return {
        drawer: false,
        loading: false,
        heightTL: "500px",
        config: {
          data: [
            ['<span style="color:#37a2da;">行1列1</span>', '行1列2', '行1列3'],
            ['行2列1', '<span style="color:#32c5e9;">行2列2</span>', '行2列3'],
            ['行3列1', '行3列2', '<span style="color:#67e0e3;">行3列3</span>'],
            ['行4列1', '<span style="color:#9fe6b8;">行4列2</span>', '行4列3'],
            ['<span style="color:#ffdb5c;">行5列1</span>', '行5列2', '行5列3'],
            ['行6列1', '<span style="color:#ff9f7f;">行6列2</span>', '行6列3'],
            ['行7列1', '行7列2', '<span style="color:#fb7293;">行7列3</span>'],
            ['行8列1', '<span style="color:#e062ae;">行8列2</span>', '行8列3'],
            ['<span style="color:#e690d1;">行9列1</span>', '行9列2', '行9列3'],
            ['行10列1', '<span style="color:#e7bcf3;">行10列2</span>', '行10列3']
          ],
          index: true,
          columnWidth: [50],
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