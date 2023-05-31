import './assets/css/App.css';
import { Dropdown, NavDropdown } from 'react-bootstrap';

import logo from './assets/imgs/logo.png';
import cesta from './assets/imgs/cestaExemplo.jpg';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

function App() {
  return (
    <div className="App">
      <div className='head'>
        <img src={logo} alt="logo" />
        <h1>Cestas e Afetos</h1>
      </div >
      <div className='produtos'>
        <Dropdown className='boxCesta'>
          <Dropdown.Toggle variant="none" id="dropdown-basic" className='bx-in'>
            <img src={cesta} alt="cesta" className='fotoCesta' />
            <div>
              <h3>cesta </h3>
              <h3>cafe da manha</h3>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu className='menu'>
            <Dropdown.Item className='itens'>
              <div>
                <span>contem:</span>
                <p>flores,cafe,suco,bolo,iogurte,wafle,mini geleia,queijo/presunto,granola,2 frutas,mini paes,mini roscas,croissant</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className='nomes'>
              <h3>escolha o nome na cesta</h3>
              <div>
                <button>amor que nao se mede</button>
                <button>que sorte nossa</button>
                <button>felicidade</button>
                <button>gratidao</button>
                <button>amor</button>
                <button>celebrar</button>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div >
  );
}

export default App;
