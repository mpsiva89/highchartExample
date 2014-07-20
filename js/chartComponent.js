//chart component used to create chart. Takes parameters as data for chart, type of chart and container for chart
var createChart = function(chartData, chartType, containerId){
    $(containerId).highcharts({
        chart: {
            type: chartType,
        },
        title: {
            text: chartData.title,
        },
        xAxis: {
            categories: chartData.xAxisCategories
        },
        yAxis: {
            title: {
                text: chartData.yAxisTitle
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'Rupees'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: chartData.seriesName,
            data: chartData.data
        }]
    });
};