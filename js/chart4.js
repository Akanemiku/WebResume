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
            data: [],
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
            data: []
        }]
    });

    myChart.showLoading();
    var names = [];
    var nums = [];
    $.ajax({
        type: 'get',
        url: 'json/data4.json',
        dataType: "json",
        success: function (result) {
            $.each(result.list, function (index, item) {
                names.push(item.semester);
                nums.push(item.gpa);
            });
            myChart.hideLoading();
            myChart.setOption({
                xAxis: {
                    data: names
                },
                series: [{
                    name: '绩点',
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