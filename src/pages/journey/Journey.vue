<template>
  <MainFrame v-on:openDrawer="getDrawer">
    <template v-slot:drawer>
      <Drawer :drawer="drawer"></Drawer>
    </template>
    <template v-slot:sidebar>
      <HomeSideBar v-on:changeContent="getContent"></HomeSideBar>
    </template>
    <template v-slot:topbar>
      <TopBar></TopBar>
    </template>
    <template v-slot:scrollbar>
      <ScrollBar>
        <dv-decoration-10 style="width:100%;" />
        <el-container>
          <Border10 :marginSize="1.5" :widthSize="44" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <dv-scroll-board :config="configTop1" style="width:90%;height:400px;margin:5%;color:#000000" />
            </template>
          </Border10>
          <Border10 :marginSize="1.5" :widthSize="49" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <dv-flyline-chart-enhanced :config="configTop" style="width:100%;height:100%;" />
            </template>
          </Border10>
        </el-container>
        <el-container>
          <!-- <Border10 :marginSize="1.5" :widthSize="23.75" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <MiddleLeftChart></MiddleLeftChart>
            </template>
          </Border10> -->
          <Border10 :marginSize="1.5" :widthSize="50" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <MiddleChart></MiddleChart>
            </template>
          </Border10>
          <Border10 :marginSize="1.5" :widthSize="43" :color="['#7DBDFF', '#41EAD5']">
            <template v-slot:borderContent>
              <dv-scroll-board :config="config" style="width:90%;height:350px;margin:5%;color:#000000" />
            </template>
          </Border10>
        </el-container>
        <el-container>
          <Border10 :marginSize="1.5" :widthSize="96" :color="['#7DBDFF', '#41EAD5']">
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
  import MiddleChart from './MiddleChart.vue'
  import TopRightChart from './TopRightChart.vue'
  // import MiddleRightChart from './MiddleRightChart'
  import MiddleLeftChart from './MiddleLeftChart.vue'
  import BottomChart from './BottomChart.vue'
  // import MapCrowdDensity from './MapCrowdDensity.vue'

  import G6 from '@antv/g6'

  export default {
    name: "Journey",
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
      MiddleChart,
      TopRightChart,
      // MiddleRightChart,
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
            ['<span style="color:#37a2da;">183666664947</span>', '2018-10-03 12:04:19', '2018-10-03 21:44:25'],
            ['139666676390', '<span style="color:#32c5e9;">2018-10-03 00:01:09</span>', '2018-10-03 23:52:16'],
            ['138666603920', '2018-10-03 14:03:06', '<span style="color:#67e0e3;">2018-10-03 20:45:02</span>'],
            ['135666647178', '<span style="color:#9fe6b8;">2018-10-03 16:42:56</span>', '2018-10-03 17:55:17'],
            ['<span style="color:#ffdb5c;">139666676390</span>', '2018-10-03 00:02:08', '2018-10-03 13:02:22'],
            ['136666680267', '<span style="color:#ff9f7f;">2018-10-03 13:25:36</span>', '2018-10-03 17:18:39'],
            ['158666602965', '2018-10-03 19:38:29', '<span style="color:#fb7293;">2018-10-03 19:52:29</span>'],
            ['159666609723', '<span style="color:#e062ae;">2018-10-03 13:17:50</span>', '2018-10-03 13:21:50'],
            ['<span style="color:#e690d1;">135666690982</span>', '2018-10-03 23:01:56', '暂无'],
          ],
          // index: true,
          // columnWidth: [50],
          align: ['center'],
          rowNum: 7,
          evenRowBGC: 'transparent',
          oddRowBGC:'#E7F9FF',
        },
        config2: {
          data: [
            ['183634764947', '2018-10-03 12:04:19', '2018-10-03 12:41:25'],
            ['159666676390', '2018-10-03 17:10:09', '2018-10-03 18:22:16'],
            ['135666603920', '2018-10-03 14:03:06', '2018-10-03 20:45:02'],
            ['135666647178', '<span style="color:#9fe6b8;">2018-10-03 16:42:56</span>', '2018-10-03 17:55:17'],
            ['<span style="color:#ffdb5c;">139666676390</span>', '2018-10-03 00:02:08', '2018-10-03 13:02:22'],
            ['136666680267', '2018-10-03 21:25:36', '暂无'],
            ['158666602965', '2018-10-03 11:38:29', '暂无'],
            ['136666680267', '2018-10-03 13:25:36', '2018-10-03 17:18:39'],
            ['158666602965', '2018-10-03 19:38:29', '2018-10-03 19:52:29'],
            ['159666609723', '<span style="color:#e062ae;">2018-10-03 13:17:50</span>', '2018-10-03 13:21:50'],
            ['<span style="color:#e690d1;">135666690982</span>', '2018-10-03 23:01:56', '暂无'],
          ],
          // index: true,
          // columnWidth: [50],
          align: ['center'],
          rowNum: 7,
          evenRowBGC: 'transparent',
          oddRowBGC:'#E7F9FF',
        },
        configTop1: {
          data: [
            ['龙之梦旅游度假中心', '工业大学兴顺校区', '207路 首车05:20 末车21:30'],
            ['家乐福北站店', '玉屏路砂川街', '247路 首车06:00 末车21:00'],
            ['于洪新城管委会', '马路湾', '257路 首车05:30 末车20:00'],
            ['西塔', '御龙逸城', '263路 首车05:50 末车20:00'],
            ['家乐福金牛店', '方家栏', '266东线 首车06:00 末车20:00'],
            ['滑翔三小区', '龙之梦亚太城', '296路 首车06:00 末车20:00'],
            ['方家栏', '家乐福金牛店', '沈阳266东线 首车05:40 末车19:30'],
            ['辽宁反腐倡廉展览馆', '马路湾', '137路 首车05:50 末车19:30'],
            ['龙之梦亚太城', '长白中路长白二街', '287路 首车06:40 末车19:30'],
          ],
          // index: true,
          // columnWidth: [50],
          align: ['center'],
          rowNum: 7,
          evenRowBGC: 'transparent',
          oddRowBGC:'transparent',
        },
        configTop12: {
          data: [
            ['沈阳站南', '东塔机场', '225路 首车05:20 末车21:00'],
            ['沈阳站南(南一马路)', '江南水乡', '223路 首车05:30 末车21:00'],
            ['长客西站公交枢纽', '五爱市场', '103路 首车04:40 末车17:00'],
            ['沈阳北站', '艳粉新村', '203路 首车05:00 末车23:00'],
            ['金山小区', '沈阳站', '220路 首车05:00 末车21:30'],
            ['马路湾', '丁香湖畔新城', '235路 首车05:40 末车21:30'],
            ['铁西广场', '和睦路地坛街', '237路 首车05:20 末车23:00'],
            ['马路湾', '长客西站公交枢纽', '240路 首车05:40 末车23:00'],
            ['中法生态城', '中山公园西', '261路 首车05:00 末车19:00'],
            ['西塔', '御龙逸城', '263路 首车05:50 末车20:00'],
            ['沙岭客运站', '五爱市场西区', '501路 首车05:20 末车18:00'],
            ['沈阳站南', '东方威尼斯', '523路 首车06:50 末车20:00'],
            ['沈阳东站北', '沈阳站', '221路 首车05:00 末车23:20'],
            ['龙之梦旅游度假中心', '工业大学兴顺校区', '207路 首车05:20 末车21:30'],
            ['工业大学兴顺校区', '马路湾', '207区路 首车21:00 末车22:00'],
          ],
          // index: true,
          // columnWidth: [50],
          align: ['center'],
          rowNum: 7,
          evenRowBGC: 'transparent',
          oddRowBGC:'transparent',
        },
        configTop: {
          points: [
            {
              name: '中山公园东站(公交站)',
              coordinate: [0.48, 0.35],
              halo: {
                show: true,
              },
              icon: {
                src: 'http://datav.jiaminghi.com/img/flylineChart/mapCenterPoint.png',
                width: 30,
                height: 30
              },
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '光荣街十三纬路站(公交站)',
              coordinate: [0.52, 0.13],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '马路湾北站(公交站)',
              coordinate: [0.33, 0.19],
              text: {
                show: true,
                color: '#000000',
              },
            },
            {
              name: '十三纬路三经街站(公交站)',
              coordinate: [0.79, 0.30],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '体育广场站(公交站)',
              coordinate: [0.53, 0.47],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '南五马路民族街站(公交站)',
              coordinate: [0.15, 0.54],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '省委(公交站)',
              coordinate: [0.36, 0.38],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '中华路南京街',
              coordinate: [0.82, 0.70],
              halo: {
                show: true,
                color: '#8378ea'
              },
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '二0二医院站(公交站)',
              coordinate: [0.56, 0.56],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '铁路中学站(公交站)',
              coordinate: [0.17, 0.76],
              halo: {
                show: true,
                color: '#37a2da'
              },
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '中华路太原街站(公交站)',
              coordinate: [0.45, 0.81],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '医大一院站(公交站)',
              coordinate: [0.55, 0.67],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '市第六医院站(公交站)',
              coordinate: [0.20, 0.36],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '和平大街南七马路站(公交站)',
              coordinate: [0.76, 0.41],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '十一纬路招商银行站(公交站)',
              coordinate: [0.68, 0.17],
              text: {
                show: true,
                color: '#000000',
              }
            }
          ],
          lines: [
            {
              source: '光荣街十三纬路站(公交站)',
              target: '中山公园东站(公交站)',
              color: '#fb7293',
              width: 4,
            },
            {
              source: '马路湾北站(公交站)',
              target: '中山公园东站(公交站)',
              color: '#fb7293',
              width: 4,
            },
            {
              source: '十三纬路三经街站(公交站)',
              target: '中山公园东站(公交站)',
              color: '#fb7293',
              width: 4,
            },
            {
              source: '中华路南京街',
              target: '中山公园东站(公交站)',
              color: '#fb7293',
              width: 4
            },
            {
              source: '铁路中学站(公交站)',
              target: '中山公园东站(公交站)',
              color: '#fb7293',
              width: 4
            },
            {
              source: '市第六医院站(公交站)',
              target: '中山公园东站(公交站)',
              color: '#fb7293',
              width: 4,
            },
            {
              source: '和平大街南七马路站(公交站)',
              target: '中山公园东站(公交站)'
            },
            {
              source: '十一纬路招商银行站(公交站)',
              target: '中山公园东站(公交站)',
              color: '#fb7293',
              width: 4,
            },
            {
              source: '体育广场站(公交站)',
              target: '铁路中学站(公交站)',
              color: '#37a2da',
              width: 4,
            },
            {
              source: '南五马路民族街站(公交站)',
              target: '铁路中学站(公交站)',
              color: '#37a2da',
              width: 4,
            },
            {
              source: '省委(公交站)',
              target: '铁路中学站(公交站)',
              color: '#37a2da',
              width: 4,
            },
            {
              source: '医大一院站(公交站)',
              target: '中华路南京街',
              color: '#8378ea',
              width: 4,
            },
            {
              source: '中华路太原街站(公交站)',
              target: '中华路南京街',
              color: '#8378ea',
              width: 4,
            },
            {
              source: '二0二医院站(公交站)',
              target: '中华路南京街',
              color: '#8378ea',
              width: 4,
            }
          ],
          icon: {
            show: true,
            src: 'http://datav.jiaminghi.com/img/flylineChart/mapPoint.png'
          },
          text: {
            show: true,
          },
          k: 0.5,
          bgImgSrc: ' '//http://datav.jiaminghi.com/img/flylineChart/map.jpg
        },
        configTop2: {
          points: [
            {
              name: '中华路太原街站(公交站)',
              coordinate: [0.48, 0.35],
              halo: {
                show: true,
              },
              icon: {
                src: 'http://datav.jiaminghi.com/img/flylineChart/mapCenterPoint.png',
                width: 30,
                height: 30
              },
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '马路湾北站(公交站)',
              coordinate: [0.33, 0.19],
              text: {
                show: true,
                color: '#000000',
              },
            },
            {
              name: '十三纬路三经街站(公交站)',
              coordinate: [0.79, 0.30],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '体育广场站(公交站)',
              coordinate: [0.70, 0.47],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '胜利大街南九马路站(公交站)',
              coordinate: [0.15, 0.54],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '沈阳站(公交站)',
              coordinate: [0.26, 0.48],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '中华路南京街',
              coordinate: [0.90, 0.20],
              halo: {
                show: true,
                color: '#8378ea'
              },
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '二0二医院站(公交站)',
              coordinate: [0.56, 0.86],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '中山公园西站(公交站)',
              coordinate: [0.27, 0.80],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '医大一院站(公交站)',
              coordinate: [0.85, 0.67],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '胜利大街南五马路站(公交站)',
              coordinate: [0.10, 0.20],
              text: {
                show: true,
                color: '#000000',
              }
            },
            {
              name: '十一纬路招商银行站(公交站)',
              coordinate: [0.68, 0.17],
              text: {
                show: true,
                color: '#000000',
              }
            }
          ],
          lines: [
            {
              source: '马路湾北站(公交站)',
              target: '中华路太原街站(公交站)',
              color: '#fb7293',
              width: 4,
            },
            {
              source: '十三纬路三经街站(公交站)',
              target: '中华路太原街站(公交站)',
              color: '#fb7293',
              width: 4,
            },
            {
              source: '中华路南京街',
              target: '中华路太原街站(公交站)',
              color: '#fb7293',
              width: 4
            },
            {
              source: '中山公园西站(公交站)',
              target: '中华路太原街站(公交站)',
              color: '#fb7293',
              width: 4
            },
            {
              source: '胜利大街南五马路站(公交站)',
              target: '中华路太原街站(公交站)',
              color: '#fb7293',
              width: 4,
            },
            {
              source: '十一纬路招商银行站(公交站)',
              target: '中华路太原街站(公交站)',
              color: '#fb7293',
              width: 4,
            },
            {
              source: '体育广场站(公交站)',
              target: '中山公园西站(公交站)',
              color: '#fb7293',
              width: 4,
            },
            {
              source: '胜利大街南九马路站(公交站)',
              target: '中山公园西站(公交站)',
              color: '#fb7293',
              width: 4,
            },
            {
              source: '沈阳站(公交站)',
              target: '中华路太原街站(公交站)',
              color: '#fb7293',
              width: 4,
            },
            {
              source: '医大一院站(公交站)',
              target: '中华路南京街',
              color: '#8378ea',
              width: 4,
            },
            {
              source: '二0二医院站(公交站)',
              target: '中华路南京街',
              color: '#8378ea',
              width: 4,
            }
          ],
          icon: {
            show: true,
            src: 'http://datav.jiaminghi.com/img/flylineChart/mapPoint.png'
          },
          text: {
            show: true,
          },
          k: 0.5,
          bgImgSrc: ' '//http://datav.jiaminghi.com/img/flylineChart/map.jpg
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
      getContent(data) {
        this.configTop1 = this.configTop12;
        this.configTop = this.configTop2;
        this.config = this.config2;
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