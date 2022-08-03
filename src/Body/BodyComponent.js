import { useState } from "react";
import { Container } from "react-bootstrap";
import CityListComponent from "./CityListComponent";

function BodyComponent () {

    const [selectedCity, setSelectedCity] = useState('Tallinn');

    return (
        <Container className="mt-4">
            <CityListComponent setSelectedCity={setSelectedCity} />
            <h2>{selectedCity}</h2>
        </Container>
    )
}

export default BodyComponent;