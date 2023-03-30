import './header.css';
import mascara from '../../images/mascara.png';

function Header() {
  return (
    <header id="header" className="header" aria-label="confetes">
      <img src={mascara} alt="Máscara amarela" className="header__logo" />
      <h1 className="header__title">Carnaval Pudding</h1>
      <p className="header__subtitle">
        Uma análise de dados sobre o Carnaval de Belo Horizonte
      </p>
    </header>
  );
}

export default Header;
