import './styles/App.scss';
import Container from 'react-bootstrap/Container';
import BodyComponent from './Body/BodyComponent';
import NavBarComponent from './NavBarComponent';
import { useSelector } from 'react-redux';


function App() {
  const theme = useSelector(state => state.theme);
  return (
    <Container className={theme}>
      <NavBarComponent />
      <BodyComponent />
    </Container>
  );
}

export default App;
