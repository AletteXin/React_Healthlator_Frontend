import logo from './logo.svg';
import './App.css';
import HealthCard from './components/HealthCard';
import Language from './components/Language';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <header>
        <Language />
        <HealthCard />
      </header>
    </div>
  );
}

export default App;
