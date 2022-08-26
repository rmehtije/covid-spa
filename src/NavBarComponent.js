import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBarComponent() {

    const [theme, setTheme] = useState('light');
    const countryId = useSelector(state => state.countryId);

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
                <Link className="navbar-brand" to="/">
                    <img
                        src="/logo.svg"
                        width="50"
                        height="50"
                        className="d-inline-block"
                        alt="React Bootstrap logo"
                    />
                    Covid Spa Information
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/reported-cases/' + countryId} className="nav-link">Reported cases Estonia</Link>
                        <Link to="/ranked-charts/cases/20" className="nav-link">Ranked charts</Link>
                    </Nav>
                </Navbar.Collapse>
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