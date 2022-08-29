import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './ReduxState';

function NavBarComponent() {
    // useSelector hook pomogajet nam sledit' za redux state i vozvrashajet nam nuzhnqj element.
    const countryId = useSelector(state => state.countryId);
    const numberOf = useSelector(state => state.numberOf);
    const theme = useSelector(state => state.theme);
    // dispatch eto funkcqja отправки действия, on prinemajet action kotorqj nuzhno vqpolnit' 
    const dispatch = useDispatch();

    function handleClick() {
        if (theme === 'light') {
            // createAction sozdal nam funkcqju kotoruju my peredali v dispatch 
            // kotorqj nam otpravil jejo v redux i zapustil s novqmi dannymi. 
            // Kotorqje peredalis v reducer 4erez action.payload
            dispatch(setTheme('dark'));
        } else {
            dispatch(setTheme('light'));
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
                        <Link 
                        to={'/ranked-charts/' + (numberOf === 'total_cases' ? 'total_cases' : 'total_deaths') + '/20'} 
                        className="nav-link">Ranked charts</Link>
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