import React, { Component } from 'react';
import Axios from 'axios';
import Cards from './Cards';

class CovidData extends Component{
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
            place: "Etawah"
        }
        this.fetchData = this.fetchData.bind(this);
        this.fetchDailyData = this.fetchDailyData.bind(this);
    }
    componentDidMount(){
        this.fetchData();
        this.fetchDailyData();
    }
    async fetchDailyData(){
        await Axios.get(`https://api.covid19india.org/districts_daily.json`)
        .then(Response => {
            const l = Response.data.districtsDaily["Uttar Pradesh"].Etawah.length;
            this.setState({
                daily_recovered: Response.data.districtsDaily["Uttar Pradesh"].Etawah[l-2].recovered 
                - Response.data.districtsDaily["Uttar Pradesh"].Etawah[l-3].recovered,
                daily_confirmed: Response.data.districtsDaily["Uttar Pradesh"].Etawah[l-2].confirmed 
                - Response.data.districtsDaily["Uttar Pradesh"].Etawah[l-3].confirmed,
                daily_deceased: Response.data.districtsDaily["Uttar Pradesh"].Etawah[l-2].deceased 
                - Response.data.districtsDaily["Uttar Pradesh"].Etawah[l-3].deceased,
            })
        })
        .catch(error => console.log(error))
    }
    async fetchData(){
        await Axios.get(`https://api.covid19india.org/state_district_wise.json`)
        .then(resp => {
            this.setState({
                confirmed: resp.data["Uttar Pradesh"].districtData.Etawah.confirmed,
                recovered: resp.data["Uttar Pradesh"].districtData.Etawah.recovered,
                active: resp.data["Uttar Pradesh"].districtData.Etawah.active,
                deceased: resp.data["Uttar Pradesh"].districtData.Etawah.deceased,
            })
        })
        .catch(
            err => console.log(err));
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
export default CovidData;