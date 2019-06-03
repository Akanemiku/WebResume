function load() {
    var myChart = echarts.init(document.getElementById('chart5'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
        title: {
            text: '编程语言熟练度',
            top:'-5',
            x: 'center'
        },
        tooltip: {},
        legend: {
            data: ['期望值', '实际值'],
            orient: 'vertical',
            x: 'left',
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: 'Java', max: 1000},
                { name: 'C/C++', max: 1000},
                { name: 'Python', max: 1000},
                { name: 'Javascript', max: 1000},
                { name: 'Go', max: 1000},
                { name: 'Swift', max: 1000}
            ]
        },
        series: [{
            type: 'radar',
            //areaStyle: {normal: {}},
            data : [
                {
                    value : [800,747,637,735,215,196],
                    name : '期望值'
                },
                {
                    value : [720,647,537,411,164,365],
                    name : '实际值'
                }
            ]
        }]
    });
}
load();