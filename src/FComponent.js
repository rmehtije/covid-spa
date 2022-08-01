import React, { useState } from 'react';

const FComponent = (props) => {
    // useState eto tak nazqvajemyj hook kotoryj dajot nam vozmoznost upravljat sostajanijem komponenta.
    // useState funkcqja prinemajet 1 argument kotorqj naznachajetsa kak zna4enije po umolchaniju
    // useState vozvrashajet massiv index 0 = zna4enije po umolchaniju, index 1 = funkcqja kotoraja vozdestvujet na peremennuju v index 0.
    // funkcqja useState = setCount zastavljajet komponent perezapustitsja.
    const [count, setCount] = useState(0);

    return (
        <div>
            {count ? (<>Vsem Privet {props.firstName} {props.lastName}</>) : ''}
            <button onClick={() => setCount(count + 1)}>Add {count}</button>
        </div>
    );
}

FComponent.defaultProps = {
    firstName: "Default Name",
    lastName: "Default Last Name"
};

export default FComponent;