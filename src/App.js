import './styles/App.scss';
import Container from 'react-bootstrap/Container';
import BodyComponent from './Body/BodyComponent';
import NavBarComponent from './NavBarComponent';
import { useSelector } from 'react-redux';

function App() {
  console.log('env', process.env.NODE_ENV);
  const theme = useSelector(state => state.theme);
  return (
    <div className={theme}>
      <Container>
        <NavBarComponent />
        <BodyComponent />
      </Container>
    </div>
  );
}

export default App;
