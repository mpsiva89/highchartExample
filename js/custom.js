//function to execute on dom load
$(document).ready(function() {
    //default data for chart
    var chartData = {
        title: 'Loan Purchase',
        xAxisCategories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        yAxisTitle : 'Interest Received',
        seriesName: 'Amount'
    };
    
    //handles click event of 'Show Graph' button
    //adding off click to make sure event doesn't bind more than one time
    $('#showGraph').off('click');
    $('#showGraph').on('click', function(e){
        chartData.data = getInputData();
        initializeCharts(chartData);
    });
    
    //retrives data from the input text boxes
    chartData.data = getInputData();
    
    //create charts on page load
    initializeCharts(chartData);
});

//function to create four different chart
var initializeCharts = function(chartData) {
    createChart(chartData, 'line', '#lineContainer');
    createChart(chartData, 'area', '#areaContainer');
    createChart(chartData, 'bar', '#barContainer');
    createChart(chartData, 'column', '#columnContainer');
};

//function to get values from input boxes and convert into array
var getInputData = function() {
    var tempData = [];
    $('.monthlyInterest').each(function(index, element){
        tempData.push(Number($(element).val()));
    });
    return tempData;
};