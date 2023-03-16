import './header.css';
import mascaraheader from '../../images/mascaraheader.png';

function Header() {
  return (
    <div className="header">
      <img
        src={mascaraheader}
        alt="Máscara amarela"
        className="header__image"
      />
      <h1 className="header__title">Carnaval Pudding</h1>
      <p className="header__subtitle">
        Uma análise de dados sobre o Carnaval de Belo Horizonte
      </p>
      <div className="header__divisor"></div>
    </div>
  );
}

export default Header;
