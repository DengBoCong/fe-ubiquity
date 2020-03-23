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
              <Border10 :marginSize="3.5" :widthSize="94" :heightSize="TRHeight" :color="['#7DBDFF', '#41EAD5']">
                <template v-slot:borderContent>
                  <dv-conical-column-chart :config="configTR1" style="width:93%;height:80%;margin:20px;" />
                </template>
              </Border10>
            </el-container>
            <el-container>
              <Border10 :marginSize="3.5" :widthSize="94" :heightSize="TRHeight" :color="['#7DBDFF', '#41EAD5']">
                <template v-slot:borderContent>
                  <dv-water-level-pond :config="configTR2" style="width:150px;height:80%;margin:20px;" />
                  <el-container style="float:right;margin-top:-180px">
                    <span>大数据标题/20</span><br/>
                    <span>正样本/20</span><br/>
                    <span>负样本/20</span>
                  </el-container>
                  <!-- <dv-water-level-pond :config="configTR2" style="width:150px;height:80%" /> -->
                </template>
              </Border10>
            </el-container>
          </el-main>
        </el-container>
        <el-container>
          <Border10 :marginSize="1.5" :widthSize="23.75" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <dv-scroll-ranking-board :config="configML" style="width:80%;height:600px;margin:10%;color:#000000" />
            </template>
          </Border10>
          <Border10 :marginSize="1.5" :widthSize="42.5" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <PolicyChart></PolicyChart>
            </template>
          </Border10>
          <Border10 :marginSize="1.5" :widthSize="23.75" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <dv-scroll-board :config="configMR" style="width:80%;height:600px;margin:10%;color:#000000" />
            </template>
          </Border10>
        </el-container>
        <el-container>
          <Border10 :marginSize="2.5" :heightSize="BHeight"  :widthSize="94" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <LineHomeChart></LineHomeChart>
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
  import LineHomeChart from 'components/common/chart/LineHomeChart'

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
      LineHomeChart,
    },
    data() {
      return {
        TRHeight: "180px",
        BHeight: "500px",
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