<template>
  <MainFrame v-on:openDrawer="getDrawer">
    <template v-slot:drawer>
      <Drawer :drawer="drawer"></Drawer>
    </template>
    <template v-slot:sidebar>
      <PersonalSideBar v-on:changeContent="getContent"></PersonalSideBar>
    </template>
    <template v-slot:topbar>
      <TopBar></TopBar>
    </template>
    <template v-slot:scrollbar>
      <ScrollBar>
        <el-container>
          <Border12 :marginSize="1.5" :widthSize="40" :color="['#7DBDFF', '#41EAD5']" style="height:900px;">
            <template v-slot:borderContent>
              <ScrollBar style="width:85%;margin:30px;height:820px;">
                <div class="block">
                  <el-timeline>
                    <el-timeline-item v-for="item in dataline" :timestamp="item.tab1" placement="top">
                      <el-card>
                        <h3>{{item.tab2}}</h3>
                        <p>经度：<span style="color:#54A8FF;">{{item.tab3}}</span>，纬度：<span style="color:#7CCA55;">{{item.tab4}}</span><br/>纠正值：<span style="color:#FF0000;">{{item.tab5}}</span></p>
                      </el-card>
                    </el-timeline-item>
                  </el-timeline>
                </div>
              </ScrollBar>
            </template>
          </Border12>
          <el-container style="width:55%;">
            <el-header style="height:370px;margin-top:10px;">
              <el-container>
                <Border12 :marginSize="1.5" :widthSize="52" :color="['#7DBDFF', '#41EAD5']" style="height:370px;">
                  <template v-slot:borderContent>
                    <div id="container" style="margin-left:40px;"></div>
                    <div id="container2" style="margin-left:40px;"></div>
                  </template>
                </Border12>
                <Border12 :marginSize="1.5" :widthSize="37" :color="['#7DBDFF', '#41EAD5']" style="height:370px;">
                  <template v-slot:borderContent>
                    <el-progress type="circle" :percentage="num" :format="format" style="margin:30px;"></el-progress>
                    <el-progress type="circle" :percentage="num2" :format="format"></el-progress>
                    <el-progress type="circle" :percentage="0" :format="format" style="margin:30px;"></el-progress>
                    <el-progress type="circle" :percentage="0" :format="format"></el-progress>
                  </template>
                </Border12>
              </el-container>
            </el-header>
            <el-main>
              <Border12 :marginSize="1.5" :widthSize="95" :color="['#7DBDFF', '#41EAD5']" style="height:500px;">
                <template v-slot:borderContent>
                  <div id="container1"></div>
                  <div id="container12"></div>
                </template>
              </Border12>
            </el-main>
          </el-container>
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
  import PersonalSideBar from './PersonalSideBar'
  import TopBar from 'components/context/topbar/TopBar'
  import ScrollBar from 'components/context/scrollbar/ScrollBar'
  import Card from 'components/context/card/Card'
  import CopyRight from 'components/context/copyright/CopyRight'
  import ErrorBarInfoChart from 'components/common/chart/ErrorBarInfoChart'
  import Border12 from 'components/context/border/Border12'
  import Border10 from 'components/context/border/Border10'
  import Border8 from 'components/context/border/Border8'
  import TopLeftChart from './TopLeftChart.vue'
  import { WordCloud } from '@antv/g2plot';
  import { Radar } from '@antv/g2plot';
  // import MiddleChart from './MiddleChart.vue'
  // import TopRightChart from './TopRightChart.vue'
  // import MiddleChart from './MiddleChart'
  // import MiddleLeftChart from './MiddleLeftChart.vue'
  // import BottomChart from './BottomChart.vue'
  // import MapCrowdDensity from './MapCrowdDensity.vue'

  import G6 from '@antv/g6'

  export default {
    name: "PersonalAnalysis",
    components: {
      MainFrame,
      Drawer,
      PersonalSideBar,
      TopBar,
      ScrollBar,
      Card,
      CopyRight,
      ErrorBarInfoChart,
      Border12,
      Border10,
      Border8,
      TopLeftChart,
      // MiddleChart,
      // TopRightChart,
      // MiddleRightChart,
      // MiddleLeftChart,
      // BottomChart,
      // MapCrowdDensity,
    },
    data() {
      return {
        drawer: false,
        loading: false,
        heightTL: "500px",
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' },
          { name: '标签liu', type: 'warning' },
          { name: '标签s', type: 'danger' },
          { name: '标签ss', type: 'warning' },
          { name: '标签df', type: 'danger' },
        ],
        json1: [
          {
            "value": 12,
            "name": "公交车"
          },
          {
            "value": 9,
            "name": "辽中区"
          },
          {
            "value": 8,
            "name": "电管站"
          },
          {
            "value": 8,
            "name": "上班族"
          },
          {
            "value": 8,
            "name": "中午"
          },
          {
            "value": 8,
            "name": "辽宁"
          },
          {
            "value": 8,
            "name": "沈阳"
          },
          {
            "value": 6,
            "name": "经度123"
          },
          {
            "value": 6,
            "name": "纬度41"
          },
          {
            "value": 6,
            "name": "两个跨越"
          },
          {
            "value": 6,
            "name": "手机"
          },
          {
            "value": 6,
            "name": "国庆"
          },
          {
            "value": 6,
            "name": "十一黄金周"
          },
          {
            "value": 6,
            "name": "16644"
          },
          {
            "value": 6,
            "name": "67664190"
          },
          {
            "value": 6,
            "name": "183666664947"
          },
          {
            "value": 6,
            "name": "卡力马"
          },
          {
            "value": 6,
            "name": "可视化"
          },
          {
            "value": 6,
            "name": "数据"
          },
          {
            "value": 6,
            "name": "数据可视化"
          },
          {
            "value": 4,
            "name": "移动应用"
          },
          {
            "value": 4,
            "name": "低头族"
          },
          {
            "value": 4,
            "name": "750路"
          }
        ],
        json2: [
          {
            "value": 12,
            "name": "公交车"
          },
          {
            "value": 9,
            "name": "十一黄金周"
          },
          {
            "value": 8,
            "name": "马路湾北站"
          },
          {
            "value": 8,
            "name": "和平区"
          },
          {
            "value": 8,
            "name": "中午"
          },
          {
            "value": 8,
            "name": "辽宁"
          },
          {
            "value": 8,
            "name": "沈阳"
          },
          {
            "value": 6,
            "name": "67465995"
          },
          {
            "value": 6,
            "name": "纬度41"
          },
          {
            "value": 6,
            "name": "两个跨越"
          },
          {
            "value": 6,
            "name": "手机"
          },
          {
            "value": 6,
            "name": "国庆"
          },
          {
            "value": 6,
            "name": "和平区"
          },
          {
            "value": 6,
            "name": "16788"
          },
          {
            "value": 6,
            "name": "经度123"
          },
          {
            "value": 6,
            "name": "159666611999"
          },
          {
            "value": 6,
            "name": "和平大街"
          },
          {
            "value": 6,
            "name": "可视化"
          },
          {
            "value": 6,
            "name": "数据"
          },
          {
            "value": 6,
            "name": "数据可视化"
          },
          {
            "value": 4,
            "name": "移动应用"
          },
          {
            "value": 4,
            "name": "低头族"
          },
          {
            "value": 4,
            "name": "750路"
          }
        ],
        dataline: [
          {tab1: '2018-10-03 10:16:34', tab2: '电管站(公交站)', tab3: '122.5268631', tab4: '41.48015976', tab5: '0.2379'},
          {tab1: '2018-10-03 10:18:58', tab2: '电管站(公交站)', tab3: '122.5268631', tab4: '41.48015976', tab5: '0.2379'},
          {tab1: '2018-10-03 10:26:27', tab2: '电管站(公交站)', tab3: '122.5268631', tab4: '41.48015976', tab5: '0.2379'},
          {tab1: '2018-10-03 10:28:32', tab2: '卡力马(公交站)', tab3: '122.7141266', tab4: '41.53754044', tab5: '0.1160'},
          {tab1: '2018-10-03 10:36:44', tab2: '八里堡站(公交站)', tab3: '122.8536682', tab4: '41.60065842', tab5: '0.2081'},
          {tab1: '2018-10-03 10:59:31', tab2: '东平湖路于洪职教中心(公交站)', tab3: '123.2917175', tab4: '41.85375977', tab5: '0.1836'},
          {tab1: '2018-10-03 11:16:50', tab2: '市第六医院站(公交站)', tab3: '123.2917175', tab4: '41.80546951', tab5: '0.1701'},
          {tab1: '2018-10-03 11:21:54', tab2: '松花江街(公交站)', tab3: '123.4403229', tab4: '41.8205986', tab5: '0.0951'},
          {tab1: '2018-10-03 11:22:28', tab2: '松花江街(公交站)', tab3: '123.4403229', tab4: '41.8205986', tab5: '0.0951'},
          {tab1: '2018-10-03 11:24:05', tab2: '市中级法院站(公交站)', tab3: '123.4363098', tab4: '41.81896973', tab5: '0.1079'},
          {tab1: '2018-10-03 11:35:40', tab2: '和平大街北七马路站(公交站)', tab3: '123.4208603', tab4: '41.81906128', tab5: '0.0033'},
          {tab1: '2018-10-03 11:37:15', tab2: '和平大街北七马路站(公交站)', tab3: '123.4208603', tab4: '41.81906128', tab5: '0.0033'},
          {tab1: '2018-10-03 11:41:41', tab2: '和平大街北七马路站(公交站)', tab3: '123.4208603', tab4: '41.81906128', tab5: '0.0033'},
          {tab1: '2018-10-03 11:47:09', tab2: '和平大街北七马路站(公交站)', tab3: '123.4208603', tab4: '41.81906128', tab5: '0.0033'},
          {tab1: '2018-10-03 11:54:49', tab2: '和平大街北七马路站(公交站)', tab3: '123.4208603', tab4: '41.81906128', tab5: '0.0033'},
          {tab1: '2018-10-03 11:55:08', tab2: '和平大街北七马路站(公交站)', tab3: '123.4208603', tab4: '41.81906128', tab5: '0.0033'},
          {tab1: '2018-10-03 12:00:42', tab2: '北市场西站(公交站)', tab3: '123.417511', tab4: '41.82001114', tab5: '0.0613'},
          {tab1: '2018-10-03 12:01:02', tab2: '和平大街北七马路站(公交站)', tab3: '123.4208603', tab4: '41.81906128', tab5: '0.0053'},
        ],
        dataline1: [
          {tab1: '2018-10-03 08:49:19', tab2: '盛世御景(公交站)', tab3: '122.749405', tab4: '41.521915', tab5: '0.5917'},
          {tab1: '2018-10-03 08:49:42', tab2: '盛世御景(公交站)', tab3: '122.749405', tab4: '41.521915', tab5: '0.5917'},
          {tab1: '2018-10-03 08:50:23', tab2: '盛世御景(公交站)', tab3: '122.749405', tab4: '41.521915', tab5: '0.5917'},
          {tab1: '2018-10-03 08:55:04', tab2: '区政府(公交站)', tab3: '122.765671', tab4: '41.51656', tab5: '0.2379'},
          
          {tab1: '2018-10-03 08:58:39', tab2: '辽中火车站(公交站)', tab3: '122.771187', tab4: '41.558601', tab5: '0.2379'},
          {tab1: '2018-10-03 09:01:50', tab2: '辽中火车站(公交站)', tab3: '122.771187', tab4: '41.558601', tab5: '0.1160'},
          {tab1: '2018-10-03 09:03:52', tab2: '辽中火车站(公交站)', tab3: '122.771187', tab4: '41.558601', tab5: '0.2379'},
          {tab1: '2018-10-03 09:29:40', tab2: '辽中火车站(公交站)', tab3: '122.771187', tab4: '41.558601', tab5: '0.1160'},
          {tab1: '2018-10-03 09:31:52', tab2: '高台(公交站)', tab3: '122.8536682', tab4: '41.60065842', tab5: '0.2081'},
          {tab1: '2018-10-03 09:32:40', tab2: '辽宁轨道交通学院(公交站)', tab3: '123.213196', tab4: '41.750408', tab5: '0.1836'},
          {tab1: '2018-10-03 09:29:44', tab2: '市第六医院站(公交站)', tab3: '123.2917175', tab4: '41.80546951', tab5: '0.1701'},
          {tab1: '2018-10-03 09:38:35', tab2: '松花江街(公交站)', tab3: '123.4403229', tab4: '41.8205986', tab5: '0.0951'},
          {tab1: '2018-10-03 11:22:28', tab2: '松花江街(公交站)', tab3: '123.4403229', tab4: '41.8205986', tab5: '0.0951'},
          {tab1: '2018-10-03 11:24:05', tab2: '市中级法院站(公交站)', tab3: '123.4363098', tab4: '41.81896973', tab5: '0.1079'},
          {tab1: '2018-10-03 11:35:40', tab2: '和平大街北七马路站(公交站)', tab3: '123.4208603', tab4: '41.81906128', tab5: '0.0033'},
          {tab1: '2018-10-03 11:37:15', tab2: '和平大街北七马路站(公交站)', tab3: '123.4208603', tab4: '41.81906128', tab5: '0.0033'},
          {tab1: '2018-10-03 11:41:41', tab2: '和平大街北七马路站(公交站)', tab3: '123.4208603', tab4: '41.81906128', tab5: '0.0033'},
          {tab1: '2018-10-03 11:47:09', tab2: '和平大街北七马路站(公交站)', tab3: '123.4208603', tab4: '41.81906128', tab5: '0.0033'},
          {tab1: '2018-10-03 11:54:49', tab2: '和平大街北七马路站(公交站)', tab3: '123.4208603', tab4: '41.81906128', tab5: '0.0033'},
          {tab1: '2018-10-03 11:55:08', tab2: '和平大街北七马路站(公交站)', tab3: '123.4208603', tab4: '41.81906128', tab5: '0.0033'},
          {tab1: '2018-10-03 12:00:42', tab2: '北市场西站(公交站)', tab3: '123.417511', tab4: '41.82001114', tab5: '0.0613'},
          {tab1: '2018-10-03 12:01:02', tab2: '和平大街北七马路站(公交站)', tab3: '123.4208603', tab4: '41.81906128', tab5: '0.0053'},
        ],
        num: 100,
        num1: 98.87,
        num2: 0,
        num22: 1.13,
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
        // this.json1 = this.json2;
        this.dataline = this.dataline1;
        this.num = this.num1;
        this.num2 = this.num22;
        document.getElementById('container').style.display="none";
        document.getElementById('container1').style.display="none";
        const wordCloudPlot = new WordCloud(document.getElementById('container2'), getWordCloudConfig(this.json2));
        wordCloudPlot.render();

        const data1 = [
          {
            item: '上班',
            score: 0,
          },
          {
            item: '旅游',
            score: 61,
          },
          {
            item: '顺风车',
            score: 0,
          },
          {
            item: '下班',
            score: 0,
          },
          {
            item: '中转',
            score: 26,
          },
          {
            item: '折返',
            score: 7,
          },
          {
            item: '办公',
            score: 0,
          },
          {
            item: '其他',
            score: 83,
          },
        ];

        const radarPlot = new Radar(document.getElementById('container12'), {
          title: {
            visible: true,
            text: '行为概率分析',
          },
          width: 800,
          height: 500,
          data: data1,
          angleField: 'item',
          radiusField: '概率',
          radiusAxis: {
            grid: {
              alternateColor: ['rgba(0, 0, 0, 0.04)', null],
            },
          },
          area: {
            visible: false,
          },
          point: {
            visible: true,
          },
        });
        radarPlot.render();

        function getDataList(data) {
          const list = [];
          // change data type
          data.forEach((d) => {
            list.push({
              word: d.name,
              weight: d.value,
              id: list.length,
            });
          });
          return list;
        }

        function getWordCloudConfig(data) {
          return {
            width: 400,
            height: 300,
            data: getDataList(data),
            // maskImage: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ',
            wordStyle: {
              rotation: [-Math.PI / 2, Math.PI / 2],
              rotateRatio: 0.5,
              rotationSteps: 4,
              fontSize: [50, 100],
              color: (word, weight) => {
                return getRandomColor();
              },
              active: {
                shadowColor: '#333333',
                shadowBlur: 10,
              },
              gridSize: 8,
            },
            shape: 'cardioid',
            shuffle: false,
            backgroundColor: 'transparent',
            tooltip: {
              visible: true,
            },
            selected: -1,

            onWordCloudHover: hoverAction,
          };
        }

        function getRandomColor() {
          const arr = [
            '#5B8FF9',
            '#5AD8A6',
            '#5D7092',
            '#F6BD16',
            '#E8684A',
            '#6DC8EC',
            '#9270CA',
            '#FF9D4D',
            '#269A99',
            '#FF99C3',
          ];
          return arr[Math.floor(Math.random() * (arr.length - 1))];
        }

        function hoverAction(item, dimension, evt, start) {
          // console.log('hover action', item && item.word);
        }
      },
      openFullScreen() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      },
      format(percentage) {
        if(percentage === 100) return '公交车100%';
        else if(percentage === 98.87) return '公交车98.77%';
        else if(percentage === 1.13) return '地铁1.13%';
        else return `${percentage}%`;
      },
    },
    mounted() {
      const wordCloudPlot = new WordCloud(document.getElementById('container'), getWordCloudConfig(this.json1));
      wordCloudPlot.render();

      function getDataList(data) {
        const list = [];
        // change data type
        data.forEach((d) => {
          list.push({
            word: d.name,
            weight: d.value,
            id: list.length,
          });
        });
        return list;
      }

      function getWordCloudConfig(data) {
        return {
          width: 400,
          height: 300,
          data: getDataList(data),
          // maskImage: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ',
          wordStyle: {
            rotation: [-Math.PI / 2, Math.PI / 2],
            rotateRatio: 0.5,
            rotationSteps: 4,
            fontSize: [50, 100],
            color: (word, weight) => {
              return getRandomColor();
            },
            active: {
              shadowColor: '#333333',
              shadowBlur: 10,
            },
            gridSize: 8,
          },
          shape: 'cardioid',
          shuffle: false,
          backgroundColor: 'transparent',
          tooltip: {
            visible: true,
          },
          selected: -1,

          onWordCloudHover: hoverAction,
        };
      }

      function getRandomColor() {
        const arr = [
          '#5B8FF9',
          '#5AD8A6',
          '#5D7092',
          '#F6BD16',
          '#E8684A',
          '#6DC8EC',
          '#9270CA',
          '#FF9D4D',
          '#269A99',
          '#FF99C3',
        ];
        return arr[Math.floor(Math.random() * (arr.length - 1))];
      }

      function hoverAction(item, dimension, evt, start) {
        // console.log('hover action', item && item.word);
      }

      //雷达图
      const data = [
        {
          item: '上班',
          score: 0,
        },
        {
          item: '旅游',
          score: 0,
        },
        {
          item: '顺风车',
          score: 0,
        },
        {
          item: '下班',
          score: 73,
        },
        {
          item: '中转',
          score: 17,
        },
        {
          item: '折返',
          score: 0,
        },
        {
          item: '办公',
          score: 0,
        },
        {
          item: '其他',
          score: 41,
        },
      ];

      const radarPlot = new Radar(document.getElementById('container1'), {
        title: {
          visible: true,
          text: '行为概率分析',
        },
        width: 800,
        height: 500,
        data,
        angleField: 'item',
        radiusField: '概率',
        radiusAxis: {
          grid: {
            alternateColor: ['rgba(0, 0, 0, 0.04)', null],
          },
        },
        area: {
          visible: false,
        },
        point: {
          visible: true,
        },
      });
      radarPlot.render();
    }
  }
</script>

<style>

</style>