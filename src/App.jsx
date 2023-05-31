import './assets/css/App.css';
import { Dropdown, NavDropdown } from 'react-bootstrap';

import logo from './assets/imgs/logo.png';
import cesta from './assets/imgs/cestaExemplo.jpg';

function App() {
  return (
    <div className="App">
      <div className='head'>
        <img src={logo} alt="logo" />
        <h1>Cestas e Afetos</h1>
      </div >
      <div className='produtos'>
        <Dropdown className='boxCesta'>
          <Dropdown.Toggle variant="null" id="dropdown-basic" className='bx-in'>
            <img src={cesta} alt="cesta" className='fotoCesta' />
            <div>
              <h3>cesta </h3>
              <h3>cafe da manha</h3>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>

            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div >
  );
}

export default App;
