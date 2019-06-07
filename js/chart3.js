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


    myChart.showLoading();    //数据加载完之前先显示一段简单的loading动画


    var names = [];    //类别数组（实际用来盛放X轴坐标值）
    var nums = [];    //销量数组（实际用来盛放Y坐标值）


    $.ajax({
        type: 'get',
        url: 'json/data3.json',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result.list, function (index, item) {
                names.push(item.class_name);    //挨个取出类别并填入类别数组                    
                nums.push(item.score);    //挨个取出销量并填入销量数组
            });


            myChart.hideLoading();    //隐藏加载动画
            myChart.setOption({        //加载数据图表
                xAxis: {
                    data: names
                },
                series: [{
                    // 根据名字对应到相应的系列
                    name: '分数',  //显示在上部的标题
                    data: nums
                }]
            });
        },
        error: function (errorMsg) {
            //请求失败时执行该函数
            alert("Request failure!");
            myChart.hideLoading();
        }
    });
};
load();