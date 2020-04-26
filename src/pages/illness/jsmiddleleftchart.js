import echarts from 'echarts'
const option = {
  series: [{
          name: '全球疫情占比图',
          color: ['#e9f6f1', '#dceffc', '#def2f4', '#fff6e7'],
          type: 'funnel',
          left: '5%',
          top: 0,
          bottom: 0,
          width: '70%',
          min: 0,
          max: 100,
          minSize: '40%',
          maxSize: '100%',
          sort: 'descending',
          legendHoverLink: false,
          gap: 10,
          label: {
              show: true,
              position: 'inside',
              fontSize: 10,
              formatter: function(params) {
                  let text = '';
                  switch (params.dataIndex) {
                      case 0:
                          text = `{value1|${params.data.data}辆}`;
                          break;
                      case 1:
                          text = `{value2|${params.data.data}辆}`;
                          break;
                      case 2:
                          text = `{value3|${params.data.data}辆}`;
                          break;
                      case 3:
                          text = `{value4|${params.data.data}辆}`;
                          break;
                  }
                  return text;
              },
              rich: {
                  value1: {
                      color: 'rgb(23,144,228)',
                      fontWeight: 700,
                      fontFamily: 'Camar'
                  },
                  value2: {
                      color: 'rgb(77,185,194)',
                      fontWeight: 700,
                      fontFamily: 'Camar'
                  },
                  value3: {
                      color: 'rgb(113,215,171)',
                      fontWeight: 700,
                      fontFamily: 'Camar'
                  },
                  value4: {
                      color: 'rgb(255,179,51)',
                      fontWeight: 700,
                      fontFamily: 'Camar'
                  }
              }
          },
          labelLine: {
              length: 10,
              lineStyle: {
                  width: 0,
                  type: 'solid'
              }
          },
          itemStyle: {
              borderColor: '#fff',
              borderWidth: 0
          },
          emphasis: {
              itemStyle: {
                  color: '#999'
              }
          },
          markLine: {
              data: [
                  [{
                          x: '70%',
                          y: '11%',
                          lineStyle: {
                              color: '#999',
                              type: 'solid',
                              width: 2
                          },
                          symbol: 'none',
                      },
                      {
                          x: '69.5%',
                          y: '14%',
                          symbol: 'none'
                      }
                  ],
                  [{
                          x: '82%',
                          y: '12.5%',
                          lineStyle: {
                              color: '#999',
                              type: 'solid'
                          },
                          symbol: 'none',
                          label: {
                              formatter: () => {
                                  return "满足测虐率"
                              },
                              position: 'start'
                          }
                      },
                      {
                          x: '90%',
                          y: '12.5%',
                          symbol: 'none'
                      }
                  ],
                  [{
                          x: '90%',
                          y: '12.5%',
                          lineStyle: {
                              color: '#999',
                              type: 'solid'
                          },
                          symbol: 'none'
                      },
                      {
                          x: '90%',
                          y: '25%',
                          label: {
                              formatter: () => {
                                  return '123%'
                              }
                          }
                      }
                  ],

                  [{
                          x: '66%',
                          y: '37%',
                          lineStyle: {
                              color: '#999',
                              type: 'solid',
                              width: 2
                          },
                          symbol: 'none',
                      },
                      {
                          x: '65.5%',
                          y: '40%',
                          symbol: 'none'
                      }
                  ],
                  [{
                          x: '78%',
                          y: '38%',
                          lineStyle: {
                              color: '#999',
                              type: 'solid'
                          },
                          label: {
                              formatter: () => {
                                  return "满足测虐率"
                              },
                              position: 'start'
                          },
                          symbol: 'none'
                      },
                      {
                          x: '90%',
                          y: '38%',
                          symbol: 'none'
                      }
                  ],
                  [{
                          x: '90%',
                          y: '38%',
                          lineStyle: {
                              color: '#999',
                              type: 'solid'
                          },
                          symbol: 'none'
                      },
                      {
                          x: '90%',
                          y: '29%',
                      }
                  ],
                  [{
                          x: '90%',
                          y: '38%',
                          lineStyle: {
                              color: '#999',
                              type: 'solid'
                          },
                          symbol: 'none'
                      },
                      {
                          x: '90%',
                          y: '50%',
                          label: {
                              formatter: () => {
                                  return "23%"
                              },
                          },
                      }
                  ],

                  [{
                          x: '62%',
                          y: '61%',
                          lineStyle: {
                              color: '#999',
                              type: 'solid',
                              width: 2
                          },
                          symbol: 'none',
                      },
                      {
                          x: '61.5%',
                          y: '64%',
                          symbol: 'none'
                      }
                  ],
                  [{
                          x: '75%',
                          y: '62.5%',
                          lineStyle: {
                              color: '#999',
                              type: 'solid'
                          },
                          label: {
                              formatter: () => {
                                  return "满足测虐率"
                              },
                              position: 'start'
                          },
                          symbol: 'none'
                      },
                      {
                          x: '90%',
                          y: '62.5%',
                          symbol: 'none'
                      }
                  ],
                  [{
                          x: '90%',
                          y: '62.5%',
                          lineStyle: {
                              color: '#999',
                              type: 'solid'
                          },
                          symbol: 'none'
                      },
                      {
                          x: '90%',
                          y: '55%',
                      }
                  ],
                  [{
                          x: '90%',
                          y: '62.5%',
                          lineStyle: {
                              color: '#999',
                              type: 'solid'
                          },
                          symbol: 'none'
                      },
                      {
                          x: '90%',
                          y: '75%',
                          label: {
                              formatter: () => {
                                  return "23%"
                              },
                          },
                      }
                  ],

                  [{
                          x: '58%',
                          y: '87%',
                          lineStyle: {
                              color: '#999',
                              type: 'solid',
                              width: 2
                          },
                          symbol: 'none',
                      },
                      {
                          x: '57.5%',
                          y: '90%',
                          symbol: 'none'
                      }
                  ],
                  [{
                          x: '70%',
                          y: '88%',
                          lineStyle: {
                              color: '#999',
                              type: 'solid'
                          },
                          label: {
                              formatter: () => {
                                  return "满足测虐率"
                              },
                              position: 'start'
                          },
                          symbol: 'none'
                      },
                      {
                          x: '90%',
                          y: '88%',
                          symbol: 'none'
                      }
                  ],
                  [{
                          x: '90%',
                          y: '88%',
                          lineStyle: {
                              color: '#999',
                              type: 'solid'
                          },
                          symbol: 'none'
                      },
                      {
                          x: '90%',
                          y: '79%',
                      }
                  ],

              ]
          },
          data: [{
                  "value": 80,
                  "data": 2646958,
                  "name": "累积确诊"
              },
              {
                  "value": 60,
                  "data": 1729641,
                  "name": "现有确诊"
              },
              {
                  "value": 40,
                  "data": 184457,
                  "name": "死亡"
              },
              {
                  "value": 20,
                  "data": 732860,
                  "name": "治愈"
              }
          ]
      },
      {
          name: '占比图',
          type: 'funnel',
          left: '5%',
          top: 0,
          bottom: 0,
          width: '70%',
          min: 0,
          max: 100,
          minSize: '40%',
          maxSize: '100%',
          legendHoverLink: false,
          sort: 'descending',
          gap: 10,
          labelLine: {
              length: 10,
              lineStyle: {
                  width: 0,
                  type: 'solid',
                  color: '#000'
              }
          },
          itemStyle: {
              borderColor: '#fff',
              borderWidth: 0,
              shadowColor: '#ddd',
              shadowBlur: 12
          },
          data: [{
                  "value": 80,
                  "rote": 0,
                  "name": "满足累积确诊数",
                  "rate": "满足确诊率"
              },
              {
                  "value": 60,
                  "rote": 47.7,
                  "name": "检查现有确诊数",
                  "rate": "检测确诊率"
              },
              {
                  "value": 40,
                  "rote": 97.2,
                  "name": "死亡数",
                  "rate": "死亡率"
              },
              {
                  "value": 20,
                  "rote": 54.0,
                  "name": "治愈数",
                  "rate": "治愈率"
              }
          ]
      }
  ]
};

export default option