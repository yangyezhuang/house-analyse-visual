let myChart1 = echarts.init(document.getElementById('chart1'));
let ch1_data;

$.ajax({
    url: '/ch1',
    async: false,
    success: function (data) {
        ch1_data = data
    }
});

option1 = {
    title: {
        text: '平均总价',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    xAxis: {
        type: 'category',
        data: ch1_data.label
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: ch1_data.data,
            type: 'bar',
            color: '#D48265'
        }
    ]
};

myChart1.setOption(option1);


// chart2
let myChart2 = echarts.init(document.getElementById('chart2'));
let ch2_data;

$.ajax({
    url: '/ch2',
    async: false,
    success: function (data) {
        ch2_data = data
    }
});

option2 = {
    title: {
        text: '平米均价',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    xAxis: {
        type: 'category',
        data: ch2_data.label
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: ch2_data.value,
            type: 'bar',
            color: '#91C7AE'
        }
    ]
};

myChart2.setOption(option2);


// chart3
let myChart3 = echarts.init(document.getElementById('chart3'));
let ch3_data;

$.ajax({
    url: '/ch3',
    async: false,
    success: function (data) {
        ch3_data = data
    }
})

option3 = {
    title: {
        text: '平米单价差',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    xAxis: {
        type: 'category',
        data: ch3_data.city
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: ch3_data.max,
            type: 'line'
        },
        {
            data: ch3_data.min,
            type: 'line'
        }
    ]
};

myChart3.setOption(option3);


// chart4
let myChart4 = echarts.init(document.getElementById('chart4'), "macarons");

option4 = {
    title: {
        text: '户型分布情况',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '15%',
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
            name: '户型',
            type: 'pie',
            radius: '65%',
            data: [
                {value: 1048, name: '三室一厅'},
                {value: 735, name: '二室一厅'},
                {value: 580, name: '四室三厅'},
                {value: 484, name: '一室一厅'},
                {value: 300, name: '四室二厅'}
            ]
        }
    ]
};

myChart4.setOption(option4);


// chart5
let myChart5 = echarts.init(document.getElementById('chart5'));

$.ajax({
    url: '/ch5',
    async: false,
    success: function (data) {
        ch5_data = data
    }
})

option5 = {
    title: {
        text: '楼层分布情况',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '15%',
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
            name: '楼层',
            type: 'pie',
            radius: ['35%', '65%'],
            data: [
                {value: 948, name: '1-6楼'},
                {value: 735, name: '7-10楼'},
                {value: 580, name: '11-15楼'},
                {value: 484, name: '16-20楼'},
                {value: 300, name: '20楼以上'}
            ]
        }
    ]
};

myChart5.setOption(option5);


// chart6
let myChart6 = echarts.init(document.getElementById('chart6'));

option6 = {
    title: {
        text: '面积分布情况',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['低于60', '60-80', '80-100', '100-120', '120-150', '150-200', '200以上']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [220, 532, 901, 1554, 1290, 330, 100],
            type: 'line',
            areaStyle: {}
        }
    ]
};

myChart6.setOption(option6);

