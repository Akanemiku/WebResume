function load() {
    var myChart = echarts.init(document.getElementById('chart3'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
        title: {
            text: '大二第一学期成绩',
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
            data: ["木球俱乐部3","概率论与数理统计","C++程序设计","计算机网络","离散数学", "数据库系统原理","Java高级编程","Python程序设计","思想道德修养与法律基础（实践）","毛泽东思想和中国特色社会主义理论体系概论(理论)"],
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
            data: [91,89,97,92,93,88,85,95,89,91]
        }]
    });
}
load();