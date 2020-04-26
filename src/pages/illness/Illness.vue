<template>
  <MainFrame v-on:openDrawer="getDrawer">
    <template v-slot:drawer>
      <Drawer :drawer="drawer"></Drawer>
    </template>
    <template v-slot:sidebar>
      <IllnessSideBar></IllnessSideBar>
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
  import IllnessSideBar from './IllnessSideBar'
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
      IllnessSideBar,
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
            ['<span style="color:#37a2da;">美国确诊</span>', '849092', '29958'],
            ['西班牙确诊', '<span style="color:#32c5e9;">208389</span>', '4211'],
            ['意大利确诊', '187327', '<span style="color:#67e0e3;">3370</span>'],
            ['法国确诊', '<span style="color:#9fe6b8;">159877</span>', '1827'],
            ['<span style="color:#ffdb5c;">加拿大确诊</span>', '40190', '24230'],
            ['巴西确诊', '<span style="color:#ff9f7f;">46182</span>', '2924'],
            ['俄罗斯', '62773', '<span style="color:#fb7293;">555</span>'],
            ['中国', '<span style="color:#e062ae;">84303</span>', '4642'],
            ['<span style="color:#e690d1;">英国</span>', '133495', '18100'],
            ['德国', '<span style="color:#e7bcf3;">151456</span>', '5385']
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