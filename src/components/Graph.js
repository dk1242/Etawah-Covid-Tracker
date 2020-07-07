import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import Axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Graph extends React.Component {
  constructor() {
    super();
    this.state = {
      graphdata: {
        labels: [],
        datasets: [
          {
            label: 'Confirmed Cases',
            fill: true,
            backgroundColor: '#4fc3f7',
            borderColor: '#01579b',
            borderWidth: 1.5,
            data: []
          },
          {
            label: 'Recovered Cases',
            fill: true,
            backgroundColor: "#81c784",
            borderColor: '#1b5e20',
            borderWidth: 1.5,
            data: []
          },
          {
            label: 'Active Cases',
            fill: true,
            borderColor: '#e65100',
            borderWidth: 1.5,
            data: []
          }
        ]
      },
      pieData: {
        labels: ['Recovered', 'Active', 'Deceased'],
        datasets: [
          {
            label: 'Covid Cases',
            backgroundColor: [
              '#4caf50',
              '#e65100',
              '#b71c1c',
            ],
            hoverBackgroundColor: [
              '#b2ff59',
              '#ff9800',
              '#f44336',
            ],
            data: []
          }
        ]
      }
    }
    this.chartReference = React.createRef();
    this.fetchData = this.fetchData.bind(this);
    this.fetchEtwData = this.fetchEtwData.bind(this);
  }
  componentDidMount() {
    console.log(this.chartReference);
    this.fetchEtwData();
    this.fetchData();
  }
  async fetchEtwData(){
    await Axios.get(`https://api.covid19india.org/state_district_wise.json`)
    .then(Response => {
      var data = [];
      this.setState(state => {
      
      if(data<=3){
        if(data<3){
      data = state.pieData.datasets[0].data.push(Response.data["Uttar Pradesh"].districtData.Etawah.recovered,
      Response.data["Uttar Pradesh"].districtData.Etawah.active,
      Response.data["Uttar Pradesh"].districtData.Etawah.deceased);
        }
      console.log(data)
      return{
        ...data
      }
      
    }
      });
      
    })
    .catch(err => console.log(err))
  }
  async fetchData() {
    await Axios.get(`https://api.covid19india.org/districts_daily.json`)
      .then(resp => {
        var labels = [];
        var confirmed = [];
        var recovered = [];
        var active = [];
        const l = resp.data.districtsDaily["Uttar Pradesh"].Etawah.length;
        this.setState(state => {
          if(labels<=l-24){
            if(labels<l-24){
              for (var i = 24; i < l; i++) {
                labels = state.graphdata.labels.push(resp.data.districtsDaily["Uttar Pradesh"].Etawah[i].date);
                confirmed = state.graphdata.datasets[0].data.push(resp.data.districtsDaily["Uttar Pradesh"].Etawah[i].confirmed);
                recovered = state.graphdata.datasets[1].data.push(resp.data.districtsDaily["Uttar Pradesh"].Etawah[i].recovered);
                active = state.graphdata.datasets[2].data.push(resp.data.districtsDaily["Uttar Pradesh"].Etawah[i].active);
              
              }
            }
          return{
            ...labels,
            ...confirmed,
            ...active,
            ...recovered
          }
          }
        });    
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container>
        <Row style={{ minHeight: "400px" }}>
          <Col sm style={{ minWidth: "400px", height: "500", padding: "10px", backgroundColor: "#e3f2fd", borderRadius: "15px", margin: "10px" }}>
            <Line
              data={this.state.graphdata}
              height={300}
              width={300}
              options={
                {
                  responsive: true,
                  title: { text: 'Corona cases in Etawah', display: true, fontSize: "20" },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          padding: 10,
                          backdropColor: "red",
                          lineHeight: 1
                        },
                        gridLines: {
                          display: true
                        }
                      }
                    ],
                    xAxes: [
                      {
                        ticks: {
                          padding: 10
                        },
                        gridLines: {
                          display: false
                        }
                      }
                    ]
                  }
                }
              }
            />
          </Col>
          <Col sm style={{ minWidth: "400px", height: "500", padding: "10px", backgroundColor: "#e3f2fd", borderRadius: "15px", margin: "10px" }}>
            <Pie
              data={this.state.pieData}
              height={250}
              width={300}
              options={{
                responsive: true,
                title: {
                  display: true,
                  text: 'Corona Cases in Etawah',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  
                  position: 'bottom'
                }
              }}
            />

          </Col>
        </Row>
        <hr />
      </Container>
    );
  }
}

export default Graph;