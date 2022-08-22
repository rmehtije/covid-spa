import { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../styles/CovidToday.scss';

function CovidTodayComponent(props) {
    return (
        <Carousel className="wrapper">
            <Carousel.Item>
                <Carousel.Caption className="caption">
                    <h3>Today Deaths</h3>
                    <p>{props.covidTodayData?.todayDeaths}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption className="caption">
                    <h3>Today Cases</h3>
                    <p>{props.covidTodayData?.todayCases}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption className="caption">
                    <h3>Today Recovered</h3>
                    <p>{props.covidTodayData?.todayRecovered}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CovidTodayComponent;
