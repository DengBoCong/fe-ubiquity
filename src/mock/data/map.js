export default {
  backgroundColor:'#181F4E',
  tooltip: {
      trigger: 'item'
  },
  geo: {
      silent: true,
      map: 'chinaMapOutline',
      show: false,
      zoom: 0.8,
      top: '0%',
      label: {
          normal: {
              show: false,
              textStyle: {
                  color: '#fff'
              }
          },
          emphasis: {
              textStyle: {
                  color: '#fff'
              }
          }
      },

      roam: false,
      itemStyle: {
          normal: {
              areaColor: {
                  type: 'linear-gradient',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [{
                          offset: 0,
                          color: 'rgba(45,68,121,0.15)' // 0% 处的颜色
                      },
                      {
                          offset: 1,
                          color: 'rgba(45,68,121,0.18)' // 100% 处的颜色
                      }
                  ],
                  global: true // 缺省为 false
              },
              // areaColor: 'transparent',
              borderColor: '#83BAFF',
              borderWidth: 1,
              shadowColor: 'rgba(56,164,255,.26)',
              opacity: 0.5,
              shadowOffsetX: 5,
              shadowOffsetY: 5,
              shadowBlur: 5,
              show: true, // 是否显示对应地名
              textStyle: {
                  //字体颜色
                  color: '#797979'
              }
          },
          emphasis: {
              color: 'transparent', //悬浮背景
              textStyle: {
                  color: '#fff'
              }
          }
      }
  },
  series: [
      {
          map: 'chinaMapOutline',
          silent: true,
          type: 'map',
          zoom: 0.8,
          label: {
              normal: {
                  show: false,
                  textStyle: {
                      color: '#fff'
                  }
              },
              emphasis: {
                  textStyle: {
                      color: '#fff'
                  }
              }
          },
          top: '0%',
          roam: false,
          itemStyle: {
              normal: {
                  areaColor: 'rgba(0,255,255,.02)',
                  borderColor: '#00ffff',
                  borderWidth: 1.5,
                  shadowColor: '#00ffff',
                  shadowOffsetX: 0,
                  shadowOffsetY: 4,
                  shadowBlur: 10,
              },
              emphasis: {
                  areaColor: 'transparent', //悬浮背景
                  textStyle: {
                      color: '#fff'
                  }
              }
          }
      },
      {
          map: 'chinaMap',
          type: 'map',
          zoom: 1.14,
          label: {
              normal: {
                  show: false,
                  textStyle: {
                      color: '#fff'
                  }
              },
              emphasis: {
                  textStyle: {
                      color: '#fff'
                  }
              }
          },
          top: '14%',
          tooltip:{
              show:false
          },
          roam: false,
          itemStyle: {
              normal: {
                  areaColor:'transparent',
                  borderColor: 'rgba(0,255,255,.1)',
                  borderWidth: 1,
              },
              emphasis: {
                  areaColor:'rgba(0,255,255,.1)',
                  textStyle: {
                      color: 'red'
                  }
              }
          }
      },
      
  ]
}