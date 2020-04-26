import echarts from 'echarts'
const option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: 'transparent'
    }, {
        offset: 1,
        color: 'transparent'
    }]),
    title: {
        text: "全球范围内各大洲疫情统计",
        subtext: "ZBH",
        top: "top",
        left: "center"
    },
    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        bottom: 20,
        data: ['亚洲', '北美洲', '欧洲', '南美洲', '非洲', '大洋洲', '其他']
    }],
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '4%',
        top: '6%',
        containLabel: true
    },
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '全球疫情',
        type: 'graph',
        layout: 'force',

        force: {
            repulsion: 300
        },
        data: [{
            "name": "全球疫情",
            // "x": 0,
            // y: 0,
            "symbolSize": 150,
            "draggable": "true",
            "value": 2646958

        }, {
            "name": "亚洲",
            "value": 422728,
            "symbolSize": 80,
            "category": "亚洲",
            "draggable": "true"
        }, {
            "name": "现有确诊",
            "symbolSize": 3,
            "category": "亚洲",
            "draggable": "true",
            "value": 207003
        }, {
            "name": "死亡",
            "symbolSize": 60,
            "category": "亚洲",
            "draggable": "true",
            "value": 15858
        }, {
            "name": "治愈",
            "symbolSize": 15,
            "category": "亚洲",
            "draggable": "true",
            "value": 199867
        }, {
            "name": "北美洲",
            "value": 915775,
            "symbolSize": 60,
            "category": "北美洲",
            "draggable": "true"
        }, {
            "name": "现有确诊1643",
            "symbolSize": 50,
            "category": "北美洲",
            "draggable": "true",
            "value": 761900
        }, {
            "name": "死亡40",
            "symbolSize": 3,
            "category": "北美洲",
            "draggable": "true",
            "value": 51289
        }, {
            "name": "欧洲",
            "value": 5,
            "symbolSize": 40,
            "category": "欧洲",
            "draggable": "true"
        }, {
            "name": "现有确诊29",
            "symbolSize": 3,
            "category": "欧洲",
            "draggable": "true",
            "value": 689366
        }, {
            "name": "死亡44",
            "symbolSize": 7,
            "category": "欧洲",
            "draggable": "true",
            "value": 111348
        }, {
            "name": "南美洲",
            "value": 97327,
            "symbolSize": 18,
            "category": "南美洲",
            "draggable": "true"
        }, {
            "name": "现有确诊431",
            "symbolSize": 20,
            "category": "南美洲",
            "draggable": "true",
            "value": 51220
        }, {
            "name": "死亡508",
            "symbolSize": 25,
            "category": "南美洲",
            "draggable": "true",
            "value": 4609
        }, {
            "name": "非洲",
            "value": 26345,
            "symbolSize": 25,
            "category": "非洲",
            "draggable": "true"
        }, {
            "name": "现有确诊55",
            "symbolSize": 5,
            "category": "非洲",
            "draggable": "true",
            "value": 17913
        }, {
            "name": "大洋洲",
            "value": 8674,
            "symbolSize": 30,
            "category": "大洋洲",
            "draggable": "true"
        }, {
            "name": "现有确诊95",
            "symbolSize": 7,
            "category": "大洋洲",
            "draggable": "true",
            "value": 2185
        }, {
            "name": "其他",
            "value": 30,
            "symbolSize": 30,
            "category": "其他",
            "draggable": "true"
        }, {
            "name": "现有确诊10",
            "symbolSize": 3,
            "category": "其他",
            "draggable": "true",
            "value": 54
        }, {
            "name": "死亡72",
            "symbolSize": 10,
            "category": "其他",
            "draggable": "true",
            "value": 13
        }],
        links: [{
            "source": "全球疫情",
            "target": "亚洲"
        }, {
            "source": "亚洲",
            "target": "现有确诊"
        }, {
            "source": "亚洲",
            "target": "死亡"
        }, {
            "source": "亚洲",
            "target": "治愈"
        }, {
            "source": "全球疫情",
            "target": "北美洲"
        }, {
            "source": "北美洲",
            "target": "现有确诊1643"
        }, {
            "source": "北美洲",
            "target": "死亡40"
        }, {
            "source": "全球疫情",
            "target": "欧洲"
        }, {
            "source": "欧洲",
            "target": "现有确诊29"
        }, {
            "source": "欧洲",
            "target": "死亡44"
        }, {
            "source": "全球疫情",
            "target": "南美洲"
        }, {
            "source": "南美洲",
            "target": "现有确诊431"
        }, {
            "source": "南美洲",
            "target": "死亡508"
        }, {
            "source": "全球疫情",
            "target": "非洲"
        }, {
            "source": "非洲",
            "target": "现有确诊55"
        }, {
            "source": "全球疫情",
            "target": "大洋洲"
        }, {
            "source": "大洋洲",
            "target": "现有确诊95"
        }, {
            "source": "全球疫情",
            "target": "其他"
        }, {
            "source": "其他",
            "target": "现有确诊10"
        }, {
            "source": "其他",
            "target": "死亡72"
        }, {
            "source": "全球疫情",
            "target": "法学院"

        }],
        categories: [{
            'name': '亚洲'
        }, {
            'name': '北美洲'
        }, {
            'name': '欧洲'
        }, {
            'name': '南美洲'
        }, {
            'name': '非洲'
        }, {
            'name': '大洋洲'
        }, {
            'name': '其他'
        }, {

        }],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {

                show: true,
                position: 'top',

            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};

export default option