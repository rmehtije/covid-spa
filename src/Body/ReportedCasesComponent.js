import { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { AreaChart } from 'reaviz';

function ReportedCasesComponent(props) {

    const formDom = useRef(null);
    const [chartData, setChartData] = useState(null); 

    const yearData = props.countryData?.data.filter(data => new Date(data.date).getFullYear() === 2022);
    console.log('yearData', yearData);

    function handleOnInput(e) {
        const [deathCount, confirmedCases, dailyNewValues, cumulativeMode] = formDom.current;
        
        let dataObject = 'new_deaths';
        if(deathCount.checked && cumulativeMode.checked) {
            dataObject = 'total_deaths';
        }
        if(confirmedCases.checked && dailyNewValues.checked) {
            dataObject = 'new_cases';
        }
        if(confirmedCases.checked && cumulativeMode.checked) {
            dataObject = 'total_cases';
        }

        setChartData(yearData.map(data => {
            return {
                key: new Date(data.date),
                data: data[dataObject] || 0,
            }
        }));
    }
    return (<>
        <div>{props.title}</div>
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
                {chartData ? <AreaChart data={chartData} /> : ""}
            </Col>
        </Row>
    </>);
}

export default ReportedCasesComponent;
