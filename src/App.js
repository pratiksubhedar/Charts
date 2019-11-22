import React from 'react';
import Chart from 'react-apexcharts';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        stroke: {
          show: true,
          curve: 'straight',
          width: 2,      
        },
        legend: {
          show: false
        },
        chart: {
          width: "100%",
          toolbar: {
            show: false,
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'March'],
          axisBorder: {
              show: true,
              color: '#78909C',
              offsetX: 0,
              offsetY: 2
          }
        },
        grid: {
          show: false,
        },
        markers: {
          size: 7,
          colors: '#5fa227',
          strokeColors: '#fff',
          strokeWidth: 0,
          strokeOpacity: 0.9,
          fillOpacity: 1,
          discrete: [],
          shape: "circle",
          radius: 2,
          offsetX: 0,
          offsetY: 0,
          onClick: undefined,
          onDblClick: undefined,
          hover: {
            size: undefined,
            sizeOffset: 3
          }
        },
        colors: ['#f8de65','#5fa227'],
        fill: {
          type: 'gradient',
              gradient: {
                shadeIntensity: 0,
              }
        },
        responsive: [
          {
            breakpoint: 360,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false
                }
              },
            }
          }
        ],
        yaxis: {
          show: true,
          axisBorder: {
              show: true,
              color: '#78909C',
              offsetX: 1,
              offsetY: 2
          }
        },
        plotOptions: {
          bar: {
              columnWidth: '50%'
          }
        },
      },
      series: [{
        type: 'column',
        data: [450, 350, 400]
      }, {
        type: 'line',
        data: [480, 420, 450]
      }]
    }
  }

  getRandVal = () => {
    return Math.floor(Math.random() * 101);
  }

  onChange = () => {
    const newSeries = [].concat(this.state.series);
    newSeries[0].data = [this.getRandVal(), this.getRandVal(), this.getRandVal()];
    newSeries[1].data = [this.getRandVal(), this.getRandVal(), this.getRandVal()];
    console.log('newSeries', newSeries);
    this.setState({
      series: newSeries
    });
  }

  render() {
    return (
      <div>
        <Chart options={this.state.options} series={this.state.series} width={300} height={300} />
        {/* <button onClick={this.onChange} >Change Graph</button> */}
      </div>
    )
  }
}

export default App;
