import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {GrFacebook, GrInstagram, GrTwitter} from 'react-icons/gr'
class Footer extends Component{

    render(){
        return(
            <footer style={{backgroundColor:"#bbdefb"}}>
                <Container>
                    <Row className="footerCont">
                        <Col sm>
                        <h4>By Etawah Diaries</h4>
                        </Col>
                        <Col sm>
                            <Row>
                            <Col style={{maxWidth:"70px"}}>
                                <a href="https://www.facebook.com/etawah.diaries/?ref=aymt_homepage_panel&eid=ARBpdkKZ1xnCJ_-d03CjdNlMk3mbSqC0poRYYxPYq3JeJcAAX-roDzBTzvK_yCpSqTo6oNN56_iCeQbB">
                                <h3 style={{margin:"0px"}}><GrFacebook /></h3></a>
                            </Col>
                            <Col style={{maxWidth:"70px"}}>
                                <a href="https://www.instagram.com/etawah.diaries/">
                                   <h3 style={{margin:"0px"}}><GrInstagram /></h3>
                                </a>
                            </Col>
                            <Col style={{maxWidth:"70px"}}>
                                <a href="https://twitter.com/EtawahD?s=20">
                                    <h3 style={{margin:"0px"}}><GrTwitter /></h3>
                                </a>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;