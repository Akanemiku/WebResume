function load() {
    var myChart = echarts.init(document.getElementById('chart6'));
    myChart.setOption({
        title:{
            text: '学期排名',
            x: 'center'
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        xAxis: {
            type: 'category',
            name: '学期',
            data: ["大一第一学期","大一第二学期","大一第二学期"],
            axisLabel:{
                interval:0
            },
            position:'top'
        },
        yAxis: {
            type: 'value',
            name:'排名',
            min: 0,
            max: 15,
            interval: 1,
            inverse:true
        },
        axisLine: {
            symbol: ['none', 'arrow']
        },
        series: [{
            name: '排名',
            type: 'line',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#333'
                        }
                    },
                }
            },
            data: [12,3,1]
        }]
    });
}
load();