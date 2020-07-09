import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
class Cards extends Component{

    render(){
        return(
            <Container>
            <h2 style={{marginLeft:'10%'}}>Corona Cases in {this.props.place}</h2>
            <p style={{marginLeft: '11%'}}>{this.props.lastUpdate ? '*Last Updated at: ' : ''}{this.props.lastUpdate}</p>
            <br />
            <Row className="row">
                <Card border="info" className="cols" id="confirm">
                <Card.Body>
                <Card.Title>
                <h1 style={{color:'blue'}}>Confirmed Cases{this.props.daily_confirmed>999 ? <br />: ''}
                {this.props.daily_confirmed == 0 ? '': <span style={{color:'#5e35b1'}}>(+{this.props.daily_confirmed})</span>}</h1>
                </Card.Title>
                <br />
                <hr />
                <br />
                <Card.Text>
                   <h1>{this.props.confirmed}</h1>
                </Card.Text>
                </Card.Body>
                </Card>
                <Card border="warning" className="cols" id="active">
                <Card.Body>
                <Card.Title><h1 style={{color:'orange'}}>Active Cases</h1></Card.Title>
                <br />
                <hr />
                <br />
                <Card.Text>
                   <h1>{this.props.active}</h1>
                </Card.Text>
                </Card.Body>
                </Card>
                <Card border="success" className="cols" id="recover">
                <Card.Body>
                <Card.Title><h1 style={{color:'green'}}>Recovered Cases{this.props.daily_recovered>999 ? <br />: ''}
                {this.props.daily_recovered == 0 ? '' : <span style={{color:'#1b5e20'}}>(+{this.props.daily_recovered})</span>}</h1></Card.Title>
                <br />
                <hr />
                <br />
                <Card.Text>
                   <h1>{this.props.recovered}</h1>
                </Card.Text>
                </Card.Body>
                </Card>
            </Row>
            <br />
            <div className="deceased"><i>No. of Deaths: {this.props.deceased} {this.props.daily_deceased == 0 ? '' : <span>(+{this.props.daily_deceased})</span>}</i></div>
            
            </Container>
        )
    }
}
export default Cards;
