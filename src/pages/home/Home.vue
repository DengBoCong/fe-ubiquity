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
          <el-aside width="60%">
            <Border10 :marginSize="2.5" :widthSize="95" :color="['#7DBDFF', '#41EAD5']">
              <template v-slot:borderContent>
                <ChinaMapInfoChart></ChinaMapInfoChart>
              </template>
            </Border10>
          </el-aside>
          <el-main style="padding:0;">
            <el-container>
              <Border10 :marginSize="3.5" :widthSize="94" :heightSize="TRHeight" :color="['#7DBDFF', '#41EAD5']"></Border10>
            </el-container>
            <el-container>
              <Border10 :marginSize="3.5" :widthSize="94" :heightSize="TRHeight" :color="['#7DBDFF', '#41EAD5']"></Border10>
            </el-container>
          </el-main>
        </el-container>
        <el-container>
          <Border10 :marginSize="1.5" :widthSize="23.75" :color="['#7DBDFF', '#41EAD5']"></Border10>
          <Border10 :marginSize="1.5" :widthSize="42.5" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <PolicyChart></PolicyChart>
            </template>
          </Border10>
          <Border10 :marginSize="1.5" :widthSize="23.75" :color="['#7DBDFF', '#41EAD5']"></Border10>
        </el-container>
        <el-container>
          <Border10 :marginSize="2.5" :heightSize="TRHeight"  :widthSize="94" :color="['#7DBDFF', '#41EAD5']"></Border10>
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
  import HomeSideBar from './HomeSideBar'
  import TopBar from 'components/context/topbar/TopBar'
  import ScrollBar from 'components/context/scrollbar/ScrollBar'
  import Card from 'components/context/card/Card'
  import CopyRight from 'components/context/copyright/CopyRight'
  import PolicyChart from 'components/common/chart/PolicyChart'
  import Border10 from 'components/context/border/Border10'
  import Border8 from 'components/context/border/Border8'
  import Border12 from 'components/context/border/Border12'
  import Border1 from 'components/context/border/Border1'
  import ChinaMapInfoChart from 'components/common/chart/ChinaMapInfoChart'

  import G6 from '@antv/g6'

  export default {
    name: "Home",
    components: {
      MainFrame,
      Drawer,
      HomeSideBar,
      TopBar,
      ScrollBar,
      Card,
      CopyRight,
      PolicyChart,
      Border10,
      Border8,
      Border12,
      Border1,
      ChinaMapInfoChart,
    },
    data() {
      return {
        TRHeight: "180px",
        drawer: false,
        chartData: {
          // 点集
          nodes: [
            {
              id: 'node1', // String，该节点存在则必须，节点的唯一标识
              x: 100, // Number，可选，节点位置的 x 值
              y: 200, // Number，可选，节点位置的 y 值
            },
            {
              id: 'node2', // String，该节点存在则必须，节点的唯一标识
              x: 300, // Number，可选，节点位置的 x 值
              y: 200, // Number，可选，节点位置的 y 值
            },
          ],
          // 边集
          edges: [
            {
              source: 'node1', // String，必须，起始点 id
              target: 'node2', // String，必须，目标点 id
            },
          ],
        },
        loading: false,
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