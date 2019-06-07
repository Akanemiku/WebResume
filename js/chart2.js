function load() {
    var myChart = echarts.init(document.getElementById('chart2'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
        title: {
            text: '大一第二学期成绩',
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
            name: '科目',
            data: ["体育2","军事教育","高等数学(下)","线性代数","大学英语(二)","C程序设计","数据结构","Java 程序设计","大学生职业规划与就业指导"],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                interval: 0,
                rotate: -10
            }
        },
        yAxis: {
            type: 'value',
            name: '分数',
            min: 0,
            max: 100,
            interval: 10
        },
        axisLine: {
            symbol: ['none', 'arrow']
        },
        series: [{
            name: '成绩',
            type: 'bar',
            barWidth: '50%',
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#333'
                        }
                    },
                    color: function (params) {
                        // 颜色的设置
                        var colorList = [
                            '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
                        ];
                        return colorList[params.dataIndex];
                    }
                }
            },
            data: [92,73,94,100,86,93,94,84,75]
        }]
    });
}
load();