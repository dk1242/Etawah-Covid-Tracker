import React, { Component } from 'react';
import Axios from 'axios';
import Cards from './Cards';

class IndiaCovidData extends Component{
    constructor(){
        super();
        this.state={
            confirmed:0,
            active: 0,
            recovered: 0,
            deceased: 0,
            daily_confirmed:0,
            daily_recovered: 0,
            daily_deceased: 0,
            lastUpdate: Date(),  
            place: "India*"
        }
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount(){
        this.fetchData();
    }
    async fetchData(){
        await Axios.get(`https://api.covid19india.org/data.json`)
        .then(Response => {
            const l = Response.data.cases_time_series.length;
            console.log(Response.data.cases_time_series[l-1]);
            this.setState({
                confirmed: Response.data.cases_time_series[l-1].totalconfirmed,
                recovered: Response.data.cases_time_series[l-1].totalrecovered,
                active: Response.data.cases_time_series[l-1].totalconfirmed-Response.data.cases_time_series[l-1].totalrecovered-Response.data.cases_time_series[l-1].totaldeceased,
                deceased: Response.data.cases_time_series[l-1].totaldeceased,
                daily_confirmed: Response.data.cases_time_series[l-1].dailyconfirmed,
                daily_recovered: Response.data.cases_time_series[l-1].dailyrecovered,
                daily_deceased: Response.data.cases_time_series[l-1].dailydeceased,
            })
            
        })
        .catch(error => console.log(error))
    }
    
    render(){
        return(
            <div>
                <Cards {...this.state}/>
                
                <br />
            </div>
        )
    }
}
export default IndiaCovidData;