import { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RankedChartsComponent from "./RankedChartsComponent";
import ReportedCasesComponent from "./ReportedCasesComponent";

function ChartsComponent() {

    const [selectedTab, setSelectedTab] = useState('');

    return (
        <Tabs
            defaultActiveKey="reposrted-cases"
            id="fill-tab-example"
            className="mb-3"
            fill
            onSelect={(eventKey) => setSelectedTab(eventKey)}
        >
            <Tab eventKey="reposrted-cases" title="Reported cases">
                <ReportedCasesComponent title={selectedTab} />
            </Tab>
            <Tab eventKey="ranked-charts" title="Ranked charts">
                <RankedChartsComponent title={selectedTab} />
            </Tab>
        </Tabs>
    );
}

export default ChartsComponent;
