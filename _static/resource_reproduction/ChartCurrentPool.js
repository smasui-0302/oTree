Highcharts.setOptions({
    colors: ['#000000', '#B2B2B2']
});

Highcharts.chart('container4', {
    chart: {
        type: 'line',
        plotBorderColor: '#000000',
        plotBorderWidth: 1
            },
    title: {
        text: 'Current_Pool'
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
            text: 'Current_Pool'
        },
        allowDecimals: false,
        gridLineWidth: 0,
        lineColor: '#000000',
        lineWidth: 1,
        min: 0,
        tickWidth: 1,
        tickColor: '#000000',
        tickInterval: 1,
        tickPosition: 'inside'
    },
    plotOptions: {
        series: {
            pointStart: 1
        }
    },
    legend: {
        enabled: false
    },
    series: js_vars.List_current_pool
});