import { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { BarChart } from 'reaviz';

function RankedChartsComponent(props) {
    const formDom = useRef(null);
    const [chartData, setCartData] = useState(null);

    const initialData = Object.values(props.covidData).slice(0, 9).map(data => {
        return {
            key: data.location,
            data: data.data.reverse()[0].total_deaths || 0,
        }
    });

    function handleOnInput(e) {
        const [totalNumberOfDeaths, totalNumberOfCases, countriesCount] = formDom.current;

        let objectData = 'total_deaths';
        if (totalNumberOfCases.checked) {
            objectData = 'total_cases';
        }
        const selectedCountriesCount = [...countriesCount].find(option => option.selected === true);

        setCartData(Object.values(props.covidData).slice(0, selectedCountriesCount.value).map(data => {
            return {
                key: data.location,
                data: data.data.reverse()[0][objectData] || 0,
            }
        }));

    }

    const countryListCount = [];
    for (let i = 1; i <= props.countryCount; i++) {
        countryListCount.push((<option key={i} value={i}>{i}</option>));
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
                    {countryListCount.length ?
                        <Form.Select defaultValue="10">
                            {countryListCount}
                        </Form.Select>
                        : ""
                    }

                </Form>
            </Col>
            <Col sm={8}>
                {chartData || initialData ? <BarChart
                    height={500}
                    data={chartData || initialData}
                /> : ""}

            </Col>
        </Row>
    </>);
}

export default RankedChartsComponent;