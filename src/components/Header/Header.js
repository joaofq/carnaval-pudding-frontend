import './header.css';
import mascara from '../../images/mascara.png';
import pessoasDancando from '../../images/3393284.png'

function Header() {

  return (
    <>
      <div id="header" className="header">
        <img src={pessoasDancando} className='header__image'></img>
        <div>
          <img
            src={mascara}
            alt="Máscara amarela"
            className="header__logo"
          />
        </div>
        <img src={pessoasDancando} className='header__image'></img>
      </div>
      <h1 className="header__title">Carnaval Pudding</h1>
      <p className="header__subtitle">
        Uma análise de dados sobre o Carnaval de Belo Horizonte
      </p></>
  );
}

export default Header;
