import RankedChartsComponent from "./RankedChartsComponent";
import ReportedCasesComponent from "./ReportedCasesComponent";
import CovidTodayComponent from './CovidTodayComponent';
// biblioteka kotoraja pomogajet nam pokazqvat' te komponenty kotoryje bqli zaprosheny 4erez url.
import { Route, Routes } from "react-router-dom";

// Routes eto wrapper nashqh marshrutov.
// Route eto marshrut v kotorqj peredajom komponent.
// path sovpodajet s nashqm url i renderit podhodjashij komponent.
// 4erez : my mozhem peredat' v komponent parametry url.
// V komponente my ih dostanim 4erez usePrams hook react-routera
// DLja pravel'noj raboty my propisqvajem vse nashy linki projekta 4erez react-router { Link }
function RouteComponent (props) {
    return (
        <Routes>
            <Route path="/" element={<CovidTodayComponent />} />
            <Route path="/reported-cases" element={<ReportedCasesComponent {...props}/>} />
            <Route path="/reported-cases/:country" element={<ReportedCasesComponent {...props}/>} />
            <Route path="/ranked-charts/:cases/:count" element={<RankedChartsComponent {...props}/>} />
        </Routes>
    );
}

export default RouteComponent;
