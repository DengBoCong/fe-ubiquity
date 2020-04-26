const option = {
  title: {
      text: '数据处理情况'
  },
  tooltip: {
      trigger: 'axis'
  },
  legend: {
      x: 'center',
      data:['数据属性','预测结果','实际结果','数据总量','队列数据量']
  },
  radar: [
      {
          indicator: [
              {text: '时间次数', max: 100},
              {text: '重复次数', max: 100},
              {text: '地点次数', max: 100},
              {text: '基站次数', max: 100}
          ],
          center: ['25%','40%'],
          radius: 80
      },
      {
          indicator: [
              {text: '准确率', max: 100},
              {text: '峰值估计', max: 100},
              {text: '均值估计', max: 100},
              {text: '缺失率', max: 100},
              {text: '谷底估计', max: 100}
          ],
          radius: 80,
          center: ['50%','60%'],
      },
      {
          indicator: (function (){
              var res = [];
              for (var i = 1; i <= 12; i++) {
                  res.push({text:i+'月',max:100});
              }
              return res;
          })(),
          center: ['75%','40%'],
          radius: 80
      }
  ],
  series: [
      {
          type: 'radar',
           tooltip: {
              trigger: 'item'
          },
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: [
              {
                  value: [60,73,85,40],
                  name: '数据属性'
              }
          ]
      },
      {
          type: 'radar',
          radarIndex: 1,
          data: [
              {
                  value: [85, 90, 90, 95, 95],
                  name: '预测结果'
              },
              {
                  value: [95, 80, 95, 90, 93],
                  name: '实际结果'
              }
          ]
      },
      {
          type: 'radar',
          radarIndex: 2,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: [
              {
                  name: '数据总量',
                  value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
              },
              {
                  name:'队列数据量',
                  value:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]
              }
          ]
      }
  ]
};

export default option