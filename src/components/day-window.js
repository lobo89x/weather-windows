import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Moment from 'moment';
// var moment = require('moment');
import fog from '../assets/images/fog.png';
import haze from '../assets/images/haze.png';
import hotWeather from '../assets/images/hot-weather.png';
import therm from '../assets/images/thermometer.png';
import rainy from '../assets/images/rainy-day.png';
import cloudy from '../assets/images/cloudy.png'

function Window(props){
    const day = props.day;
    const i = props.i;
    const date = new Date(day.dt * 1000);
    Moment.locale('en');
    const dateFormatted = Moment(date).format("DD.MMM.yyyy");
    const dateDay = Moment(date).format("ddd");
    const winClass = "w-" + day.dt;
    //const win = document.querySelector("."+winClass);
    let winColor = '';
    let feels = day.feels_like.day * 100;
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

        let main = day.weather[0].main;
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

    return(
        // <Container fluid className={winClass} style={{backgroundImage: 'linear-gradient(to right,'+winColor+')'}}>
        //             <div className="p-3">
        //                 <small>
        //                     Feels Like:
        //                 </small>
        //                 <h2>
        //                     {day.feels_like.day}
        //                 </h2>
        //                 <div>
        //                     <Row>
        //                         <h3>{dateDay}</h3>
        //                         <h4>{dateFormatted}</h4>
        //                     </Row>
        //                     <Row>
        //                         <Col xs={6} xl={6}>
        //                             Day: <br/>
        //                             Night: <br/>
        //                             Max: <br/>
        //                             Min: <br/>                                    
        //                         </Col>
        //                         <Col xs={6} xl={6}>
        //                             {day.temp.day} <br/>
        //                             {day.temp.night}<br/>
        //                             {day.temp.max}<br/>
        //                             {day.temp.min}<br/>
        //                         </Col>
        //                     </Row>
        //                 </div>
        //             </div>
        // </Container>
        <Container>
            <Row>
              <img src={icon} />
              <h7>{day.weather[0].description}</h7>
            </Row>
            <Row>
                <h3>{day.feels_like.day}</h3>
            </Row>
            <Row>
                <h5>{dateDay}</h5>
                <h6>{dateFormatted}</h6>
            </Row>
        </Container>
    )
}

export default Window;