import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ChartsComponent from "./ChartsComponent";
import CountryListComponent from "./CountryListComponent";
import { readCovidData } from '../dataService/fileService';

function BodyComponent () {

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [covidData, setCovidData] = useState(null);
    const [countryList, setCountryList] = useState([]);
    const [countryData, setCountryData] = useState(null);

    function handleCountrySelect (countryKey) {
        setCountryData(covidData[countryKey]);
    }
    // await ispolzujetsa tolko v async funkcqii
    // zapuskajem zapros polu4enija dannqh, dozhedajemsa otveta i vozvrashajem rezultat
    // catch vqdast nam jesli budut propblemy s zaprosom
    // try pytajetsa vypolnit' vsjo
    // catch lovit oshqbki i peredajot oshibku v 'error' peremennuju
    async function getData() {
        try {
            const data = await readCovidData();
            console.log(data);
            return data;
        } catch (error) {
            console.error(error);
        }
    }
    // useEffect eto reakt hook kotoryj zapusajetsa tolko posle togo kak ves' komponent obrabotalsa
    // useEffect v otli4ii useState ne zapuskajet novuju obrabotku komponenta
    // v useEffect mozhno postavit' triggerq kotorqje budut upravljat' jego zapusku.
    // my postavili null dlja togo 4toby ubeditsa 4to useEfect zapustitsa tolko odin raz pri ppervoj obrabotki componenta
    // then funkcqija zapuskajetsa kogda prevedushija funkcqja vqpolnila return, tojest zakon4ilas.
    // then peredajot otvet s etoj prevedushij funkcqii
    useEffect(() => {
        getData().then((data) => {
            setCovidData(data);
            const list = [];
            for (const key in data) {
                list.push({key, name: data[key].location});
            }
            setCountryList(list);
        });
    }, [null]);

    // Kazhdqj komponent mozhet prinemat' properties kak i ljubaja funkcqja v js prinemajet argumenty.
    // Properties mogut bqt' ljubqmi tipa (string, int, function, null, undefined.)
    return (
        <Container className="mt-4">
            <CountryListComponent countryList={countryList} handleCountrySelect={handleCountrySelect} />
            <ChartsComponent countryData={countryData}/>
        </Container>
    )
}

export default BodyComponent;