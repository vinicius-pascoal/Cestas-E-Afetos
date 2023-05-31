import './assets/css/App.css';
import { Accordion } from 'react-bootstrap';

import Item from './assets/components/TemplateCestas';

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
        {/* TODO: Add itens loop (arr.map) */}
        <Accordion defaultActiveKey="0" className='arcodeon'>
          <Item key='0' img={cesta} cesta='cafe da manha' price='R$ 100,00' cestaUrl='cafe%20da%20manha' conteudo='flores,cafe,suco,bolo,iogurte,wafle,mini geleia,queijo/presunto,granola,2 frutas,mini paes,mini roscas,croissant' />
          <Item key='1' img={cesta} cesta='cafe da manha' price='R$ 100,00' cestaUrl='cafe%20da%20manha' conteudo='flores,cafe,suco,bolo,iogurte,wafle,mini geleia,queijo/presunto,granola,2 frutas,mini paes,mini roscas,croissant' />
        </Accordion>
      </div>
    </div >
  );
}

export default App;
