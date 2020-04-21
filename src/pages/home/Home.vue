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
              name: '公交',
              value: 120
            },
            {
              name: '飞机',
              value: 71
            },
            {
              name: '轮渡',
              value: 66
            },
            {
              name: '驾车',
              value: 80
            },
            {
              name: '地铁',
              value: 35
            },
            {
              name: '步行',
              value: 15
            }
          ],
          img: [
            'http://datav.jiaminghi.com/img/conicalColumnChart/6st.png',
            'http://datav.jiaminghi.com/img/conicalColumnChart/2st.png',
            'http://datav.jiaminghi.com/img/conicalColumnChart/4st.png',
            'http://datav.jiaminghi.com/img/conicalColumnChart/5st.png',
            'http://datav.jiaminghi.com/img/conicalColumnChart/3st.png',
            'http://datav.jiaminghi.com/img/conicalColumnChart/7st.png'
          ],
          // showValue: true,
          textColor: '#606266',
        },
        configTR2: {
          data: [66, 45],
          shape: 'round'
        },
        configML: {
          data: [
            {
              name: '中山公园东站(公交站)',
              value: 685
            },
            {
              name: '和平大街八纬路站(公交站)',
              value: 123
            },
            {
              name: '中华路太原街站(公交站)',
              value: 102
            },
            {
              name: '北三路圣工街(公交站)',
              value: 95
            },
            {
              name: '马路湾北站(公交站)',
              value: 93
            },
            {
              name: '家具广场站(公交站)',
              value: 67
            },
            {
              name: '保工街南十四路站(公交站)',
              value: 65
            },
            {
              name: '北行站(公交站)',
              value: 65
            },
            {
              name: '中山广场东站(公交站)',
              value: 62
            },
            {
              name: '北市场西站(公交站)',
              value: 61
            },
            {
              name: '龙之梦旅游度假中心(公交站)',
              value: 55
            },
            {
              name: '霁虹站(公交站)',
              value: 54
            },
            {
              name: '北市场西站(公交站)',
              value: 48
            }
          ],
          rowNum: 10,
        },
        configMR: {
          header: ['经度', '纬度'],
          data: [
            ['<span style="color:#37a2da;">123.4087296</span>', '41.80886078'],
            ['123.4159698', '<span style="color:#32c5e9;">41.80778122</span>'],
            ['123.4017715', '41.79084015'],
            ['123.3570938', '41.83414078'],
            ['<span style="color:#ffdb5c;">123.4119873</span>', '41.8078804'],
            ['123.4087067', '<span style="color:#ff9f7f;">41.80638123</span>'],
            ['123.4119873', '41.8078804'],
            ['123.4136581', '<span style="color:#e062ae;">41.81689835</span>'],
            ['<span style="color:#e690d1;">123.3410721</span>', '41.42948151'],
            ['123.3436737', '<span style="color:#e7bcf3;">41.78839111</span>'],
            ['123.4128571', '<span style="color:#e7bcf3;">41.80469894</span>'],
            ['123.4140396', '41.79716873'],
            ['123.417511', '41.82001114'],
            ['<span style="color:#ffdb5c;">123.4856567</span>', '41.80027008'],
            ['123.3980179', '<span style="color:#ff9f7f;">41.80838013</span>'],
          ],
          index: true,
          columnWidth: [50],
          align: ['center'],
          rowNum: 10,
          headerBGC: '##E8FAFE',
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