import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Navbarm extends Component{
    
    render(){
        return(
            <div>
            <Navbar style={{backgroundColor:"#bbdefb"}}>
            <h1 className="navheading">Etawah Corona Tracker</h1>
            </Navbar>
            <br />
            <br />
            </div>
        )
    }
}

export default Navbarm;