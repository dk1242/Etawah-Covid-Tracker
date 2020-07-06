import React, { Component } from 'react';
import Axios from 'axios';
import Cards from './Cards';

class UpCovidData extends Component{
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
            place: "Uttar Pradesh*"
        }
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount(){
        this.fetchData();
    }
    async fetchData(){
        await Axios.get(`https://api.covid19india.org/data.json`)
        .then(Response => {
            console.log(Response.data.statewise[5]);
            this.setState({
                confirmed: Response.data.statewise[5].confirmed,
                recovered: Response.data.statewise[5].recovered,
                active: Response.data.statewise[5].active,
                deceased: Response.data.statewise[5].deaths,
                daily_confirmed: Response.data.statewise[5].deltaconfirmed,
                daily_recovered: Response.data.statewise[5].deltarecovered,
                daily_deceased: Response.data.statewise[5].deltadeaths,
                lastUpdate: Response.data.statewise[5].lastupdatedtime
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
export default UpCovidData;