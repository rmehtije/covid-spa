import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBarComponent() {
// Navbrar component = navigacqja v kotoroj pokachto tol'ko nazvanie i logo
// Vse fotografii dolzhnq nahoditsa v papke public
// <Navbar.Brand = link / ssylka
    return (
        <Navbar bg="light" expand="lg">
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
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;