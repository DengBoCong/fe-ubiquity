import echarts from 'echarts'
var hours = ['0', '1', '2', '3', '4', '5', '6',
        '7', '8', '9','10','11',
        '12', '13', '14', '15', '16', '17',
        '18', '19', '20', '21', '22', '23'];
var days = ['18-24岁', '25-34岁', '35-44岁',
        '45-54岁', '55-64岁', '65岁以上'];

var data = [
    [0,0,0.7],	[1,0,0.7],	[2,0,0.9],	[3,0,1.3],	[4,0,0.9],	[5,0,0.2],
[0,1,0.7],	[1,1,0.6],	[2,1,0.6],	[3,1,0.9],	[4,1,0.8],	[5,1,0.3],
[0,2,2.2],	[1,2,1.3],	[2,2,1.9],	[3,2,2.2],	[4,2,1.9],	[5,2,0.4],
[0,3,1.2],	[1,3,0.9],	[2,3,1.2],	[3,3,1.56966747769667],	[4,3,1.03663003663004],	[5,3,0.512820512820513],
[0,4,0.826608731636665],	[1,4,0.90344982078853],	[2,4,1.08524267060852],	[3,4,1.1669099756691],	[4,4,0.709401709401709],	[5,4,1],
[0,5,1.40926960480033],	[1,5,1.75739247311828],	[2,5,1.69327420546933],	[3,5,2.70332522303325],	[4,5,6.34798534798535],	[5,5,1.20512820512821],
[0,6,1.06496999793089],	[1,6,0.717405913978495],	[2,6,1.21261394432126],	[3,6,1.62027575020276],	[4,6,1.71184371184371],	[5,6,1.43589743589744],
[0,7,4.77053589902752],	[1,7,2.61301523297491],	[2,7,4.45109632914511],	[3,7,3.85758313057583],	[4,7,2.84981684981685],	[5,7,1.71794871794872],
[0,8,2.67452927788123],	[1,8,1.70094086021505],	[2,8,2.90145355999015],	[3,8,3.85304136253041],	[4,8,2.34798534798535],	[5,8,1.74358974358974],
[0,9,4.19946203186427],	[1,9,2.34901433691756],	[2,9,3.5060359694506],	[3,9,4.55133819951338],	[4,9,4.65689865689866],	[5,9,1.8974358974359],
[0,10,4.25470722118767],	[1,10,3.47950268817204],	[2,10,4.78147326927815],	[3,10,5.82222222222222],	[4,10,4.18681318681319],	[5,10,2.02564102564103],
[0,11,6.03020897992965],	[1,11,5.17025089605735],	[2,11,8.42633653609263],	[3,11,8.77388483373885],	[4,11,5.75824175824176],	[5,11,2.23076923076923],
[0,12,3.13221601489758],	[1,12,1.92865143369176],	[2,12,2.51773835920177],	[3,12,3.46196269261963],	[4,12,3.94139194139194],	[5,12,2.28205128205128],
[0,13,3.85247258431616],	[1,13,3.56888440860215],	[2,13,4.82520325203252],	[3,13,6.51386861313869],	[4,13,5.98168498168498],	[5,13,2.30769230769231],
[0,14,4.59114421684254],	[1,14,3.55958781362007],	[2,14,3.34688346883469],	[3,14,7.05174371451744],	[4,14,4.84004884004884],	[5,14,2.76923076923077],
[0,15,3.31553900268984],	[1,15,2.91297043010753],	[2,15,4.0429908844543],	[3,15,6.12084347120843],	[4,15,4.49450549450549],	[5,15,2.92307692307692],
[0,16,5.7767432236706],	[1,16,4.04525089605735],	[2,16,4.4220251293422],	[3,16,4.3007299270073],	[4,16,6.73626373626374],	[5,16,3.23076923076923],
[0,17,3.73970618663356],	[1,17,3.45631720430108],	[2,17,5.76619857107662],	[3,17,6.18783454987835],	[4,17,5.95726495726496],	[5,17,3.61538461538461],
[0,18,7.78129526174219],	[1,18,5.40120967741935],	[2,18,7.22333086967233],	[3,18,8.22141119221411],	[4,18,6.63736263736264],	[5,18,4.05128205128205],
[0,19,6.47217049451686],	[1,19,4.84923835125448],	[2,19,6.4150036954915],	[3,19,8.28467153284671],	[4,19,9.01221001221001],	[5,19,4.12820512820513],
[0,20,5.77136354231326],	[1,20,7.09442204301075],	[2,20,7.6940133037694],	[3,20,8.36285482562855],	[4,20,7.08424908424908],	[5,20,4.64102564102564],
[0,21,10.0813159528243],	[1,21,7.23868727598566],	[2,21,10.0767430401577],	[3,21,11.984103811841],	[4,21,8.24786324786325],	[5,21,5.23076923076923],
[0,22,4.78377819159942],	[1,22,4.12735215053763],	[2,22,4.7440256220744],	[3,22,6.90835360908354],	[4,22,5.81929181929182],	[5,22,5.64102564102564],
[0,23,9.75108628181254],	[1,23,9.15961021505376],	[2,23,9.82163094358216],	[3,23,12.0592051905921],	[4,23,11.8693528693529],	[5,23,6.71794871794872],
    ];

var option = {
    tooltip: {
        position: 'top'
    },
    title: [],
    singleAxis: [],
    series: []
};

echarts.util.each(days, function (day, idx) {
    option.title.push({
        textBaseline: 'middle',
        top: (idx + 0.5) * 100 / 7 + '%',
        text: day
    });
    option.singleAxis.push({
        left: 150,
        type: 'category',
        boundaryGap: false,
        data: hours,
        top: (idx * 100 / 7 + 5) + '%',
        height: (100 / 7 - 10) + '%',
        axisLabel: {
            interval: 2
        }
    });
    option.series.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: [],
        symbolSize: function (dataItem) {
            return dataItem[1] * 4;
        }
    });
});

echarts.util.each(data, function (dataItem) {
    option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
});

export default option