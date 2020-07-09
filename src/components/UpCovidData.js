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
            var l=5;
            for(var i=0; i<Response.data.statewise.length; i++){
                if(Response.data.statewise[i].state === "Uttar Pradesh"){
                    l=i;
                    i=Response.data.statewise.length-1;
                }
            }
            this.setState({
                confirmed: Response.data.statewise[l].confirmed,
                recovered: Response.data.statewise[l].recovered,
                active: Response.data.statewise[l].active,
                deceased: Response.data.statewise[l].deaths,
                daily_confirmed: Response.data.statewise[l].deltaconfirmed,
                daily_recovered: Response.data.statewise[l].deltarecovered,
                daily_deceased: Response.data.statewise[l].deltadeaths,
                lastUpdate: Response.data.statewise[l].lastupdatedtime
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