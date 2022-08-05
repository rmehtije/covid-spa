import { useState } from "react";
import Container from "react-bootstrap/Container";
import ChartsComponent from "./ChartsComponent";
import CityListComponent from "./CityListComponent";

function BodyComponent () {

    const [selectedCity, setSelectedCity] = useState('Tallinn');

    // Kazhdqj komponent mozhet prinemat' properties kak i ljubaja funkcqja v js prinemajet argumenty.
    // Properties mogut bqt' ljubqmi tipa (string, int, function, null, undefined.)
    return (
        <Container className="mt-4">
            <CityListComponent setSelectedCity={setSelectedCity} />
            <ChartsComponent />
        </Container>
    )
}

export default BodyComponent;