import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Moment from "moment";
import fog from '../assets/images/fog.png';
import haze from '../assets/images/haze.png';
import hotWeather from '../assets/images/hot-weather.png';
import therm from '../assets/images/thermometer.png';
import rainy from '../assets/images/rainy-day.png';
import cloudy from '../assets/images/cloudy.png'

function Today(props){
    const today = props.current;
    console.log(today);
    if(!today.weather){
        return(
            <h1>Loading...</h1>
        )
    }
        let weather = [];
        weather = today.weather[0];
    
    
    let main = weather.main;
    function renderIcon(main){
        switch(main){
            case'Mist':
                return haze;//"https://www.flaticon.com/free-icons/haze";
            case'Rain':
                return rainy;//"https://www.flaticon.com/free-icons/rainy-day";
            case'Sunny':
                return hotWeather;//"https://www.flaticon.com/free-icons/hot-weather";
            case 'Clouds':
                return cloudy;
            default:
                return therm;//"rc\assets\images\thermometer.png";
            }
    }
    let icon = renderIcon(main);
    const date = new Date();
    Moment.locale('en');
    const dateFormatted = Moment(date).format("DD.MMM.yyyy");
    const dateDay = Moment(date).format("ddd");

    return(
        <Container fluid className={main}>
            <Row>
                <Col xs={6} med={6} lg={6}>
                    <div className="p-3">
                        <h2>{dateDay}</h2>
                        <h5>{dateFormatted}</h5>
                    </div>
                    <Row>
                        <Col>
                            <h1 style={{fontSize: '15vw'}}>
                                {today.temp}
                            </h1>
                            <h3>{weather.description}</h3>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <img src={icon} style={{ width: '90%'}}/>
                    </Row>
                    <Row>
                        <small className="iconCredit">
                            <a href="https://www.flaticon.com/free-icons/weather" title="weather icons">Weather icons created by lutfix - Flaticon</a>
                        </small>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Today;