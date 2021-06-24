let data;

function bahold() {
    let BA = data.map(row=>{
        return {x: data.columns.slice(1,16), y: Object.values(row).slice(0,15), name: row.State, type:'scatter'
        }
        });
    Plotly.newPlot('line',BA, layout);
}

//var config = {responsive : true}

var layout = {
    autosize: false,
    showlegend:true,
    width: 1500,
    height: 1000,
    margin: {
      l: 50,
      r: 50,
      b: 100,
      t: 100,
      pad: 4
    },
    title: {
        text:'BA Holders',
        font: {
          family: 'Courier New, monospace',
          size: 24,
          'xanchor':'center',
          'yanchor':'top',
        },
        xref: 'paper',
      },
      xaxis: {
        title: {
          text:'Year',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
          }
        },
      },
      yaxis: {
        title: {
          text: 'Year',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
        }
    }
  }
}


d3.csv('BA_Hold_25_44.csv').then(d=>{data=d; bahold();});