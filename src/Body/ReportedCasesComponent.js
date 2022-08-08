import { useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { AreaChart } from 'reaviz';

function ReportedCasesComponent(props) {

    const formDom = useRef(null);

    function handleOnInput(e) {
        const [deathCount, confirmedCases, dailyNewValues, cumulativeMode] = formDom.current;

        console.log('deathCount', deathCount.checked);
        console.log('confirmedCases', confirmedCases.checked);
        console.log('dailyNewValues', dailyNewValues.checked);
        console.log('cumulativeMode', cumulativeMode.checked);
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
                <AreaChart
                    data={[
                        { key: new Date('11/29/2019'), data: 8 },
                        { key: new Date('11/30/2019'), data: 13 },
                        { key: new Date('12/1/2019'), data: 6 },
                    ]}
                />
            </Col>
        </Row>
    </>);
}

export default ReportedCasesComponent;
