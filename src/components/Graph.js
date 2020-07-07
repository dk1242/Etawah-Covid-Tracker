import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Graph extends Component{
    constructor(){
        super();
        this.state = {
            dataPoints:[]
        }
    }
    render(){
        const options = {
			theme: "light2",
			title: {
				text: "Stock Price of NIFTY 50"
			},
			axisY: {
				title: "Price in USD",
				prefix: "$",
				includeZero: false
			},
			data: [{
				type: "line",
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "$#,##0.00",
				dataPoints: this.state.dataPoints
			}]
        }
        return(
            <div>
                <canvasJSChart options={options}
                    onRef = {ref => this.chart = ref} />
            </div>
        );
    }
    componentDidMount(){
		var chart = this.chart;
		fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
            console.log(data);
			for (var i = 0; i < data.length; i++) {
				dataPoints.push({
					x: new Date(data[i].x),
					y: data[i].y
				});
			}
			chart.render();
        })
        .catch(err => console.log(err));
	}
}

export default Graph;