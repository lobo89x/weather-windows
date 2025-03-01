import React, { useState, useEffect, setS, Component} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Window from "./day-window";
import axios from "axios";

class Pane extends Component {
    //getforcast() = async () => {
    constructor(props) {
        super(props);
        this.state = {
            days: []
        };
        this.forcast();
    };
    
    
    forcast = () => {
        const APIkey = '9b70bb67f4b51dda59df2e5423edd10f';
        const weatherStack = '32d4a22a0594b9a299cf0e8f4070c144';
        //https://api.openweathermap.org/data/3.0/onecall/day_summary?lat={lat}&lon={lon}&date={date}&appid={API key}
        axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=33.74&lon=-84.39&appid='+APIkey+'&units=imperial')
            .then((res) => {
                this.setState({
                    days: res.data.daily
                })
            })
    }

    render(){
        return (
            <Container fluid>
                <Row className="p-3">
                    {this.state.days.map((day,i) =>(
                        <Col className="window" style={{backgroundColor: '#282c34'}}>
                            <Window day={day} i={i} />
                        </Col>
                    ))} 
                </Row>
            </Container>
        )
    }
}

export default Pane;