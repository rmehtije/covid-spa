import { useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { BarChart } from 'reaviz';

function RankedChartsComponent() {
    const formDom = useRef(null);

    function handleOnInput(e) {
        const [totalNumberOfDeaths, totalNumberOfCases, countriesCount] = formDom.current;

        console.log('totalNumberOfDeaths', totalNumberOfDeaths.checked);
        console.log('totalNumberOfCases', totalNumberOfCases.checked);

        const selectedCountriesCount = [...countriesCount].find(option => option.selected === true);


        console.log('selectedCountriesCount', selectedCountriesCount.value);

    }

    return (<>
        <Row>
            <Col sm={4}>
                <Form ref={formDom} onInput={handleOnInput}>
                    <Form.Check
                        type="radio"
                        name="group1"
                        label={`Total number of deaths`}
                        defaultChecked={true}
                    />
                    <Form.Check
                        type="radio"
                        name="group1"
                        label={`Total number of cases`}
                    />
                    <label className="mt-2">Select countries count</label>
                    <Form.Select defaultValue="4">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </Form.Select>
                </Form>
            </Col>
            <Col sm={8}>
                <BarChart
                    data={[
                        { key: 'DLP', data: 13 },
                        { key: 'SIEM', data: 2 },
                        { key: 'Endpoint', data: 7 }
                    ]}
                />
            </Col>
        </Row>
    </>);
}

export default RankedChartsComponent;