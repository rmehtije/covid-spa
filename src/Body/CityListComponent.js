import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CityListComponent(props) {
    // Komponenet prinemajet properties s bodycomponent i naznachajet ih v 
    // odin object kootryj my nazvali props.
    // Propertis ne ljza izmenit'
    const [inputValue, setInputValue] = useState('');

    const cities = [
        'Tallinn',
        'Parnu',
        'Tartu',
        'Valga',
        'Viljadni',
    ];
// onChange, onSelect, onClick ... eto sobytija kotorye prihodjat ot brauzera i v svoju ochered' ot pol'zovatelja
// Kaktolko pol'zovatel' sdelal 4tolibo na brauzere, brauzer otrpoovljajet eto k nam na obrabot4iki.
// takzhe brauzer otrpavljajet object s vsemi vozmozhnomi dannymi o sobqtii.
// Obrabot4iki eto funkcqii nazna4enq v triggery
// target = cel' derzhqt v sebe tot element v kootom proizoshel event.

// Funkcqja filter rabotajet tol'ko dlja massiva
// On zapuskajet cycl i prohodit po kazhdomu znacheniju massiva.
// Eta funkcqja ozhqdajet 4to vernut true ili false
// I na osnove etogo on budet naznachat' novyj massiv
// true ili false budet reshat' dobavljat' znachenije v novqj ili net

// V nashem primere my vozvrashajem jest li vbityj polzovateljom tekst v odnom iz gorodov.

// kogda my izpolzujet cycle dlja generacqii elementov v jsx ili react elemente to objazatel'no my dolzhnq
// peredat' generirejemu lementu property key={} unikal'noe znachenije.
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>Select City</InputGroup.Text>
            <Form.Control aria-label="First name" onChange={(e) => setInputValue(e.target.value)} />
            <Form.Select onChange={(e) => props.setSelectedCity(e.target.value)} aria-label="Default select example">
                <option value="">Open this select menu</option>
                {cities.filter(city => city.includes(inputValue)).map(city => (<option key={city} value={city}>{city}</option>))}
            </Form.Select>
        </InputGroup>
    );
}

export default CityListComponent;