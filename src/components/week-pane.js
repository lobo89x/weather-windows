import React, { useState, useEffect, setS, Component} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Window from "./day-window";
import axios from "axios";
import Today from "./today";

class Pane extends Component {
    //getforcast() = async () => {
    constructor(props) {
        super(props);
        this.state = {
            days: [],
            current: []
        };
        this.forcast();
    };
    
    
    forcast = () => {
        const APIkey = '9b70bb67f4b51dda59df2e5423edd10f';
        const weatherStack = '32d4a22a0594b9a299cf0e8f4070c144';
        //https://api.openweathermap.org/data/3.0/onecall/day_summary?lat={lat}&lon={lon}&date={date}&appid={API key}
        axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=33.74&lon=-84.39&appid='+APIkey+'&units=imperial')
            .then((res) => {
                console.log(res.data);
                this.setState({
                    days: res.data.daily,
                    current: res.data.current
                })
            })
    }

    rendBckg = (feel) => {
        let winColor = '';
        let feels = feel * 100;
        if( feels > 9000 ){
            winColor = '#F0BC68,#CC5500'
        } else if( feels < 3000 ){
            winColor = '#F0F2F2,#F2F2F2'
        } else if( 3000 < feels && feels < 4000 ){
            winColor = '#F0F2F2,#F2F2F2'
        } else if( 4000 < feels && feels < 5000 ){
            winColor = '#C2E6DF,#F0F2F2'
        } else if( 5000 < feels && feels  < 6000 ){
            winColor = '#E5F5DC,#C2E6DF'
        } else if( 6000 < feels && feels  < 7000 ){
            winColor = '#ABD3DB,#E5F5DC'
        } else if( 7000 < feels && feels  < 8000 ){
            winColor = '#F2D8A7,#ABD3DB'
        } else if( 8000 < feels && feels  < 9000 ){
            winColor = '#CC5500,#F2D8A7'
        }
        return winColor;
    }

    render(){
        return (
            <Container fluid style={{backgroundImage: 'linear-gradient(to right,'+this.rendBckg(this.state.current.temp)+')', minHeight: '100%'}}>
                <Row className="p-1">
                    <Col className="today">
                        <Today current={this.state.current} />
                    </Col>
                </Row>
                <Row className="p-3">
                    {this.state.days.map((day,i) =>(
                        <Col className="window">
                            <Window day={day} i={i} />
                        </Col>
                    ))} 
                </Row>
            </Container>
        )
    }
}

export default Pane;