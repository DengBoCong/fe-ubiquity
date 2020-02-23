<template>
  <MainFrame v-on:openDrawer="getDrawer">
    <template v-slot:drawer>
      <Drawer :drawer="drawer"></Drawer>
    </template>
    <template v-slot:sidebar>
      <SideBar></SideBar>
    </template>
    <template v-slot:topbar>
      <TopBar></TopBar>
    </template>
    <template v-slot:scrollbar>
      <ScrollBar>
        <el-container>
          <Card :cardSize="45" 
            v-loading="loading">
            <template v-slot:headerExplain>
              <span>安防</span>
            </template>
            <template v-slot:headerOperator>
              <el-button @click="openFullScreen" style="float: right; padding: 3px 0" type="text">刷新数据</el-button>
            </template>
            <template v-slot:cardContent>
              <PolicyChart></PolicyChart>
            </template>
          </Card>
          <Card :cardSize="45">
            <template v-slot:header>
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </template>
          </Card>
          <!-- <ul>
      <li v-for="item in 100" :key="item">{{item}}</li>
    </ul> -->
        </el-container>
        <el-container>
          <Card :cardSize="21.25">
            <template v-slot:header>
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </template>
          </Card>
          <Card :cardSize="42.5">
            <template v-slot:header>
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </template>
          </Card>
          <Card :cardSize="21.25">
            <template v-slot:header>
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </template>
          </Card>
        </el-container>
        <el-container>
          <Card :cardSize="100">
            <template v-slot:header>
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </template>
          </Card>
        </el-container>
        <el-container>
          <Card :cardSize="100">
            <template v-slot:header>
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </template>
          </Card>
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
  import SideBar from 'components/context/sidebar/SideBar'
  import TopBar from 'components/context/topbar/TopBar'
  import ScrollBar from 'components/context/scrollbar/ScrollBar'
  import Card from 'components/context/card/Card'
  import CopyRight from 'components/context/copyright/CopyRight'
  import PolicyChart from 'components/common/chart/PolicyChart'

  import G6 from '@antv/g6'

  export default {
    name: "Home",
    components: {
      MainFrame,
      Drawer,
      SideBar,
      TopBar,
      ScrollBar,
      Card,
      CopyRight,
      PolicyChart,
    },
    data() {
      return {
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