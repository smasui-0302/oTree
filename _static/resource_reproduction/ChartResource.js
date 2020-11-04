Highcharts.chart('container2', {
    chart: {
        type: 'line',
        plotBorderColor: '#000000',
        plotBorderWidth: 1
            },
    title: {
        text: 'Resources'
    },
    xAxis: {
        title: {
            text: 'rounds'
        },
        allowDecimals: false,
        lineColor: '#000000',
        lineWidth: 1,
        min: 1,
        max: js_vars.num_rounds,
        tickColor: '#000000',
        tickPosition: 'inside'
    },
    yAxis: {
        title: {
            text: 'resources'
        },
        allowDecimals: false,
        gridLineWidth: 0,
        lineColor: '#000000',
        lineWidth: 1,
        min: 0,
        tickWidth: 1,
        tickColor: '#000000',
        tickPosition: 'inside'
    },
    plotOptions: {
        series: {
            pointStart: 1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
    },
    series: js_vars.List_resource
});