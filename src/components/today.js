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
    console.log(weather);
    //current.weather[0].description
    return(
        <Container fluid className={main}>
            <Row>
                <Col>
                    <div className="p-3">
                        <h3>{weather.description}</h3>
                        <h4>{dateDay}</h4>
                        <h5>{dateFormatted}</h5>
                    </div>
                    <Row>
                        <Col>
                            <h1 style={{fontSize: '10vh'}}>
                                {today.temp}
                            </h1>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <img src={icon} />
                    <small>
                        <a href="https://www.flaticon.com/free-icons/weather" title="weather icons">Weather icons created by lutfix - Flaticon</a>
                    </small>
                </Col>
            </Row>
        </Container>
    )
}

export default Today;