import React from 'react';
import Chart from 'react-apexcharts';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          width: "100%",
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'March'],
        },
        grid: {
          show: false,
        },
        markers: {
          size: 10,
          colors: undefined,
          strokeColors: '#fff',
          strokeWidth: 2,
          strokeOpacity: 0.9,
          fillOpacity: 1,
          discrete: [],
          shape: "square",
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
        colors: ['#fae877'],
        responsive: [
          {
            breakpoint: 360,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false
                }
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      },
      series: [{
        type: 'column',
        data: [1000, 129, 4]
      }, {
        type: 'line',
        data: [80, 70, 40],
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
        <Chart options={this.state.options} series={this.state.series} width={500} height={320} />
        <button onClick={this.onChange} >Change Graph</button>
      </div>
    )
  }
}

export default App;
