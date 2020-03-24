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
        <dv-decoration-10 style="width:100%;height:5px;" />
        <el-container>
          <Border10 :marginSize="2.5" :widthSize="95" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <LineBarDataTrendChart></LineBarDataTrendChart>
            </template>
          </Border10>
        </el-container>
        <el-container>
          <Border10 :marginSize="2.5" :widthSize="45" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <ErrorBarInfoChart></ErrorBarInfoChart>
            </template>
          </Border10>
          <Border10 :marginSize="2.5" :widthSize="45" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <OneWeekInfoChart></OneWeekInfoChart>
            </template>
          </Border10>
        </el-container>
        <el-container>
          <Border10 :marginSize="2.5" :heightSize="BHeight"  :widthSize="94" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <LineBarUserDataTrend></LineBarUserDataTrend>
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
  import Border12 from 'components/context/border/Border12'
  import Border1 from 'components/context/border/Border1'
  import LineBarDataTrendChart from 'components/common/chart/LineBarDataTrendChart'
  import OneWeekInfoChart from 'components/common/chart/OneWeekInfoChart'
  import LineBarUserDataTrend from 'components/common/chart/LineBarUserDataTrend'

  import G6 from '@antv/g6'

  export default {
    name: "DataTrend",
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
      Border12,
      Border1,
      LineBarDataTrendChart,
      OneWeekInfoChart,
      LineBarUserDataTrend,
    },
    data() {
      return {
        TRHeight: "180px",
        BHeight: "500px",
        drawer: false,
        loading: false,
        configTR1: {
          data: [
            {
              name: '周口',
              value: 55
            },
            {
              name: '南阳',
              value: 120
            },
            {
              name: '西峡',
              value: 71
            },
            {
              name: '驻马店',
              value: 66
            },
            {
              name: '新乡',
              value: 80
            },
            {
              name: '信阳',
              value: 35
            },
            {
              name: '漯河',
              value: 15
            }
          ],
          img: [
            'http://datav.jiaminghi.com/img/conicalColumnChart/1st.png',
            'http://datav.jiaminghi.com/img/conicalColumnChart/2st.png',
            'http://datav.jiaminghi.com/img/conicalColumnChart/3st.png',
            'http://datav.jiaminghi.com/img/conicalColumnChart/4st.png',
            'http://datav.jiaminghi.com/img/conicalColumnChart/5st.png',
            'http://datav.jiaminghi.com/img/conicalColumnChart/6st.png',
            'http://datav.jiaminghi.com/img/conicalColumnChart/7st.png'
          ],
          showValue: true,
          textColor: '#606266',
        },
        configTR2: {
          data: [66, 45],
          shape: 'round'
        },
        configML: {
          data: [
            {
              name: '周口',
              value: 55
            },
            {
              name: '南阳',
              value: 120
            },
            {
              name: '西峡',
              value: 78
            },
            {
              name: '驻马店',
              value: 66
            },
            {
              name: '新乡',
              value: 80
            },
            {
              name: '信阳',
              value: 45
            },
            {
              name: '漯河',
              value: 29
            },
            {
              name: '周口',
              value: 55
            },
            {
              name: '南阳',
              value: 120
            },
            {
              name: '西峡',
              value: 78
            },
            {
              name: '驻马店',
              value: 66
            },
            {
              name: '新乡',
              value: 80
            },
            {
              name: '信阳',
              value: 45
            },
            {
              name: '漯河',
              value: 29
            }
          ],
          rowNum: 10,
        },
        configMR: {
          header: ['列1', '列2', '列3'],
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
            ['行10列1', '<span style="color:#e7bcf3;">行10列2</span>', '行10列3'],
            ['行10列1', '<span style="color:#e7bcf3;">行10列2</span>', '行10列3']
          ],
          index: true,
          columnWidth: [50],
          align: ['center'],
          rowNum: 10,
          headerBGC: '#82BAFF',
          evenRowBGC: 'transparent',
          oddRowBGC:'#E7F9FF',
        },
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