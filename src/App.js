// importirujem stili bootstrap, chtoby react bootstrap mog pravel'no otobrazhat' elemnty
import 'bootstrap/dist/css/bootstrap.min.css';
// react bootstrap eto gotovye komponenety dlja reakta
import Container from 'react-bootstrap/Container';
import BodyComponent from './Body/BodyComponent';
import NavBarComponent from './NavBarComponent';

// funkcionalnij komponent 
function App() {
// Kotoryj vozvrashjajet JSX element/React elementom
// Vsjo prilozhenije my oborachivajem v react bootstrap container dlja luchshego otobrazhenija v brauzere
// V kotrainer my pomestili nashy glavnqje komponenty
  return (
    <Container>
      <NavBarComponent />
      <BodyComponent />
    </Container>
  );
}

// Kazhdyj komponent dolzhen ekspartirovatsa dlja dal'nejshego ispolzovanija
// export eksportirujet
// default naznachajet kakim obrazom budet importirovatsa
// kogda jest default na komponent ili funkcqju to import budet bez {}
// jesli defailt net to import budet v figurnyh skobq4kah.
// delajetsa dlja udobnogo ispolzovanija
export default App;
