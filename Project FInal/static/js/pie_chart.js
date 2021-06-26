var pie_div = d3.select('#pie_chart')
pie_div.html('')
var canvas = pie_div.append('canvas').attr('id', 'canvas')
var select_menu = pie_div.append('select').attr('id', 'select_menu').attr('onchange', 'selectedD(this.value)')
var path = '../../data/By_Major_type_mod.csv'
var myChart = ''


d3.csv(path).then(d => {
    d.forEach(i => {
        select_menu.append('option').text(i.Major)
    });
    var get_canvas = document.getElementById('canvas').getContext('2d')
    myChart = new Chart(get_canvas, {
        type: 'pie',
        data: {
            datasets: [{
                data: [d[0]['Unemployment Rate'], d[0]['Underemployment Rate']],
                backgroundColor: ['#4747d3', '#c754d5']
            }],
            labels: ['Unemployment Rate', 'Underemployment Rate']
        },
        options: {
            responsive: false
        }
    })
})

function selectedD(sel) {
    myChart.destroy()
    buildChart(sel)
}

function buildChart(major) {
    d3.csv(path).then(d => {
        var filtered = d.filter(i => i.Major == major)
        var rates = [filtered[0]['Unemployment Rate'], filtered[0]['Underemployment Rate']]
        var labels = ['Unemployment Rate', 'Underemployment Rate']
        var get_canvas = document.getElementById('canvas').getContext('2d')
        myChart = new Chart(get_canvas, {
            type: 'pie',
            data: {
                datasets: [{
                    data: rates,
                    backgroundColor: ['#4747d3', '#c754d5']
                }],
                labels: labels
            },
            options: {
                responsive: false
            }
        })
    })
}