import echarts from 'echarts'

var base = +new Date(2018, 10, 3);
var oneDay = 600 * 1000;
var date = [];
var tmp = [2,2,2,2,2,1,4,1,6,6,6,7,4,5,1,5,10,22,56,54,73,121,100,102,192,40,1,5,10,22,102,192,40,1,5,10,22,102,192,40,1,5,10,22,102,192,40,10,880,10,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,80,17,10,10,100,80,15,1,12,12,0,0,0,0,10,1,5,10,22,102,192,40,1,5,10,22,102,192,40,1,5,10,22,102,192,40,1,5,10,22,102,192,40,10,880,10,2,0,0,0,0,1,1,1,80,17,10,10,100,80,15,1,12,12,0,0,0,0,10,2,2,2,2,2,1,4,1,6,6,6,7,4,5,1,5,10,22,56,54,73,121,100,102,192,40,1,5,10,22,102,192,40,1,5,10,22,102,192,40,1,5,10,22,102,192,40,10,880,10,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,80,17,10,10,100,80,15,1,12,12,0,0,0,0,10,1,5,10,22,102,192,40,1,5,10,22,102,192,40,1,5,10,22,102,192,40,1,5,10,22,102,192,40,10,880,10,2,0,0,0,0,1,1,1,80,17,10,10,100,80,15,1,12,12,0,0,0,0,10];
var i = 0;
var data = [Math.random() * 150];
var now = new Date(base);

function addData(shift) {
    now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
    date.push(now);
    data.push(tmp[i]);
    i++;

    if (shift) {
        date.shift();
        data.shift();
    }

    now = new Date(+new Date(now) + oneDay);
}

for (var i = 1; i < 25; i++) {
    addData();
}

const option = {
    backgroundColor: 'transparent',
    title: {
        text: '实时流量',
        textStyle: {
            color: "#ccc"
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '14%',
        top: '26%',
        containLabel: true
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    legend: {
        data: ['误差', '均值', '延迟率'],
        top: 12,
        textStyle: {
            color: "#000000"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },
    xAxis: {
        type: 'category',
        data: date,
        axisLine: {
            lineStyle: {
                color: '#000000'

            }
        },
        axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
                fontFamily: 'Microsoft YaHei'
            }
        },
    },

    yAxis: {
        type: 'value',
        max: '1200',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000000'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#9E9E9E'
            }
        },
        axisLabel: {}
    },
    dataZoom: [{
        show: true,
        height: 12,
        xAxisIndex: [
            0
        ],
        bottom: '8%',
        start: 10,
        end: 90,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#d3dee5",

        },
        textStyle: {
            color: '#000000'
        },
        borderColor: '#90979c'
    }, {
        type: 'inside',
        show: true,
        height: 15,
        start: 1,
        end: 35
    }],
    series: [{
            name: '误差',
            type: 'bar',
            barWidth: '15%',
            label: {
                normal: {
                    show: true,
                    lineHeight: 30,
                    width: 80,
                    height: 30,
                    backgroundColor: '#252453',
                    borderRadius: 200,
                    position: ['-8', '-60'],
                    distance: 1,
                    formatter: [
                        '    {d|●}',
                        ' {a|{c}次}     \n',
                        '    {b|}'
                    ].join(','),
                    rich: {
                        d: {
                            color: '#3CDDCF',
                        },
                        a: {
                            color: '#fff',
                            align: 'center',
                        },
                        b: {
                            width: 1,
                            height: 30,
                            borderWidth: 1,
                            borderColor: '#234e6c',
                            align: 'left'
                        },
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#248ff7'
                    }, {
                        offset: 1,
                        color: '#6851f1'
                    }]),
                    barBorderRadius: 11,
                }
            },
            data: data
        },
        {
            name: '均值',
            type: 'bar',
            barWidth: '15%',
            label: {
                normal: {
                    show: true,
                    lineHeight: 30,
                    width: 80,
                    height: 30,
                    backgroundColor: '#252453',
                    borderRadius: 200,
                    position: ['-8', '-60'],
                    distance: 1,
                    formatter: [
                        '    {d|●}',
                        ' {a|{c}次}     \n',
                        '    {b|}'
                    ].join(','),
                    rich: {
                        d: {
                            color: '#3CDDCF',
                        },
                        a: {
                            color: '#fff',
                            align: 'center',
                        },
                        b: {
                            width: 1,
                            height: 30,
                            borderWidth: 1,
                            borderColor: '#234e6c',
                            align: 'left'
                        },
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#8bd46e'
                    }, {
                        offset: 1,
                        color: '#09bcb7'
                    }]),
                    barBorderRadius: 11,
                }

            },
            data: data
        },
        {
            name: '延迟率',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fccb05'
                    }, {
                        offset: 1,
                        color: '#f5804d'
                    }]),
                    barBorderRadius: 12,
                },
            },
            label: {
                normal: {
                    show: true,
                    lineHeight: 30,
                    width: 80,
                    height: 30,
                    backgroundColor: '#252453',
                    borderRadius: 200,
                    position: ['-8', '-60'],
                    distance: 1,
                    formatter: [
                        '    {d|●}',
                        ' {a|{c}次}     \n',
                        '    {b|}'
                    ].join(','),
                    rich: {
                        d: {
                            color: '#3CDDCF',
                        },
                        a: {
                            color: '#fff',
                            align: 'center',
                        },
                        b: {
                            width: 1,
                            height: 30,
                            borderWidth: 1,
                            borderColor: '#234e6c',
                            align: 'left'
                        },
                    }
                }
            },
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
        }
    ]
};

setInterval(function () {
    addData(true);
}, 3500);

export default option