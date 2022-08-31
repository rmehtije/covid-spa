import { useEffect, useRef, useState } from "react";
import { AreaChart } from "reaviz";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Row, Col, Form }  from "react-bootstrap";
import CountryListComponent from "./CountryListComponent";
import { setNumberOf } from "../ReduxState";

function ReportedCasesComponent(props) {

    const formDom = useRef(null);
    const [chartData, setChartData] = useState(null);
    const [countryId, setCountryId] = useState(null);
    const params = useParams();
    const dispatch = useDispatch();

    const id = countryId || params.country || props.initialCountryId;

    useEffect(() => {
        setChartData(props.covidData[id]?.data?.map(data => {
            return {
                key: new Date(data.date),
                data: data.new_deaths || 0,
            }
        }));
        dispatch(setNumberOf('total_deaths'));
    }, [id, props.covidData, dispatch]);

    function handleCountrySelect(countryKey) {
        setCountryId(countryKey);
    }

    function handleOnInput(e) {
        const [deathCount, confirmedCases, dailyNewValues, cumulativeMode] = formDom.current;

        dispatch(setNumberOf(deathCount.checked ? 'total_deaths' : 'total_cases'));
        let dataObject = 'new_deaths';
        if (deathCount.checked && cumulativeMode.checked) {
            dataObject = 'total_deaths';
        }
        if (confirmedCases.checked && dailyNewValues.checked) {
            dataObject = 'new_cases';
        }
        if (confirmedCases.checked && cumulativeMode.checked) {
            dataObject = 'total_cases';
        }

        setChartData(props.covidData[id]?.data?.map(data => {
            return {
                key: new Date(data.date),
                data: data[dataObject] || 0,
            }
        }));
    }
    return (<>
        {props.countryList.length ?
            <CountryListComponent
                countryList={props.countryList}
                handleCountrySelect={handleCountrySelect}
                country={params.country} />
            : ""}

        <Row>
            <Col sm={4}>
                <Form ref={formDom} onInput={handleOnInput}>
                    <Form.Check
                        type="radio"
                        name="group1"
                        label={`Death count`}
                        defaultChecked={true}
                    />
                    <Form.Check
                        type="radio"
                        name="group1"
                        label={`Confirmed cases`}
                    />
                    <Form.Check
                        className="mt-2"
                        type="radio"
                        name="group2"
                        label={`Daily new values`}
                        defaultChecked={true}
                    />
                    <Form.Check
                        type="radio"
                        name="group2"
                        label={`Cumulative mode`}
                    />
                </Form>
            </Col>
            <Col sm={8}>
                {chartData ? (<AreaChart data={chartData} height={500} />) : ""}
            </Col>
        </Row>
    </>);
}

ReportedCasesComponent.defaultProps = {
    initialCountryId: 'OWID_WRL',
}

export default ReportedCasesComponent;
