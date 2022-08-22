import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function NavBarComponent() {

    const [theme, setTheme] = useState('light');
    
    function handleClick() {
        if (theme === 'light') {
            setTheme('dark');
            document.body.style.background = 'black';
            document.getElementsByClassName('navbar-brand')[0].style.color = 'white';
        } else {
            setTheme('light');
            document.body.style.background = 'white';
            document.getElementsByClassName('navbar-brand')[0].style.color = 'black';
        }
    }

    return (
        <Navbar bg={theme} expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="/logo.svg"
                        width="50"
                        height="50"
                        className="d-inline-block"
                        alt="React Bootstrap logo"
                    />
                    Covid Spa Information
                </Navbar.Brand>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    onClick={() => handleClick()}
                />
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;