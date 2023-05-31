import { Accordion } from 'react-bootstrap';

export default function Item({ key, img, cesta, price, conteudo, cestaUrl }) {
  return (
    <Accordion.Item eventKey={key} className='boxCesta'>
      <Accordion.Header className='bx-in'>
        <img src={img} alt="cesta" className='fotoCesta' />
        <div>
          <h3>cesta </h3>
          <h3>{cesta}</h3>
          <h3>{price}</h3>
        </div>
      </Accordion.Header>
      <Accordion.Body className='menu'>
        <div className='itens'>
          <span>contem:</span>
          <p>{conteudo}</p>
        </div>
        <div className='nomes'>
          <h3>escolha o nome na cesta</h3>
          <div>
            <a href={`https://wa.me/+5579988210551?text=ola%20estou%20interessado%20em%20uma%20cesta%20${cestaUrl}%20com%20o%20nome%20amor%20que%20nao%20se%20mede`}>amor que nao se mede</a>
            <a href={`https://wa.me/+5579988210551?text=ola%20estou%20interessado%20em%20uma%20cesta%20${cestaUrl}%20com%20o%20nome%20que%20sorte%20nossa`}>que sorte nossa</a>
            <a href={`https://wa.me/+5579988210551?text=ola%20estou%20interessado%20em%20uma%20cesta%20${cestaUrl}%20com%20o%20nome%20felicidade`}>felicidade</a>
            <a href={`https://wa.me/+5579988210551?text=ola%20estou%20interessado%20em%20uma%20cesta%20${cestaUrl}%20com%20o%20nome%20gratidao`}>gratidao</a>
            <a href={`https://wa.me/+5579988210551?text=ola%20estou%20interessado%20em%20uma%20cesta%20${cestaUrl}%20com%20o%20nome%20amor`}>amor</a>
            <a href={`https://wa.me/+5579988210551?text=ola%20estou%20interessado%20em%20uma%20cesta%20${cestaUrl}%20com%20o%20nome%20celebrar`}>celebrar</a>
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  )
}
