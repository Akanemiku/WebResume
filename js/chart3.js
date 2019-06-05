function load() {
    var myChart = echarts.init(document.getElementById('chart3'));
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
            data: [],
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
            data: []
        }]
    });

    myChart.showLoading();
    var names = [];
    var nums = [];
    $.ajax({
        type: 'get',
        url: 'json/data3.json',
        dataType: "json",
        success: function (result) {
            $.each(result.list, function (index, item) {
                names.push(item.class_name);
                nums.push(item.score);
            });
            myChart.hideLoading();
            myChart.setOption({
                xAxis: {
                    data: names
                },
                series: [{
                    name: '分数',
                    data: nums
                }]
            });
        },
        error: function (errorMsg) {
            alert("Request failure!");
            myChart.hideLoading();
        }
    });

}
load();