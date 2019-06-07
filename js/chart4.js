function load() {
    var myChart = echarts.init(document.getElementById('chart4'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
        title:{
            text: '学期绩点',
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
            data: ["大一第一学期","大一第二学期","大二第一学期"],
            axisLabel:{
                interval:0
            }
        },
        yAxis: {
            type: 'value',
            name:'绩点',
            min: 0,
            max: 5,
            interval: 0.2
        },
        axisLine: {
            symbol: ['none', 'arrow']
        },
        series: [{
            name: '绩点',
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
            data: [3.62,3.96,4.08]
        }]
    });
}
load();