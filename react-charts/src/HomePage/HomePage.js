import React, { Component } from 'react'
import axios from 'axios';
import ChartComp from '../ChartComp/ChartComp';


class HomePage extends Component {
  state = {
    data: {
      datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#48C9B0',
                '#9B59B6',
                '#5D6D7E',
                '#0E6655',
                '#5DADE2',
            ]
        }
      ],
      labels: []
    } 
  }

  async componentDidMount(){
    const res = await axios.get('http://localhost:4000/budget');
    let tempData = this.state.data;
    for(let i=0;i<res.data.myBudget.length;i++){
        tempData.datasets[0].data[i]=res.data.myBudget[i].budget;
        tempData.labels[i] = res.data.myBudget[i].title;
    }

    this.setState({
      data: Object.assign({}, this.state.data, {
          data: tempData
      })
    });
  }
  
  render() {
    return (
        <div>
            {/* <Pie data={this.state.data} /> */}
            <ChartComp data={this.state.data} />

        </div>
    )
  }
}

export default HomePage;