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
          <Card :cardSize="750">
            <template v-slot:headerExplain>
              <span>安防</span>
            </template>
            <template v-slot:headerOperator>
              <el-button style="float: right; padding: 3px 0" type="text">headerOperator</el-button>
            </template>
            <template v-slot:cardContent>
              <PolicyChart></PolicyChart>
            </template>
          </Card>
          <Card :cardSize="750">
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
          <el-col :span="6">
            <Card :cardSize="350">
              <template v-slot:header>
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </template>
            </Card>
          </el-col>
          <el-col :span="12">
            <Card :cardSize="740">
              <template v-slot:header>
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </template>
            </Card>
          </el-col>
          <el-col :span="6">
            <Card :cardSize="350">
              <template v-slot:header>
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </template>
            </Card>
          </el-col>
        </el-container>
        <el-container>
          <Card :cardSize="1540">
            <template v-slot:header>
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </template>
          </Card>
        </el-container>
        <el-container>
          <Card :cardSize="1540">
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
    },
    mounted() {
      const data = {
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
      };
      const graph = new G6.Graph({
        container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
        width: 800, // Number，必须，图的宽度
        height: 500, // Number，必须，图的高度
      });
      graph.data(data); // 读取 Step 2 中的数据源到图上
      graph.render(); // 渲染图
    }
  }
</script>

<style>

</style>