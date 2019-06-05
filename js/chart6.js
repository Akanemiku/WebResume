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
            data: [],
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
            data: []
        }]
    });


    myChart.showLoading();
    var names = [];
    var nums = [];
    $.ajax({
        type: 'get',
        url: 'json/data5.json',
        dataType: "json",        
        success: function (result) {
            $.each(result.list, function (index, item) {
                names.push(item.semester);            
                nums.push(item.rank);
            });
            myChart.hideLoading();
            myChart.setOption({
                xAxis: {
                    data: names
                },
                series: [{
                    name: '排名',
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