import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Desenvolvido por:{' '}
        <a className="footer__link" href="https://github.com/diego-analytics">
          Diego
        </a>
        ,{' '}
        <a className="footer__link" href="https://github.com/Aguiar-Gabriel">
          Gabriel
        </a>
        ,{' '}
        <a className="footer__link" href="https://github.com/hainaha">
          Haina
        </a>
        ,{' '}
        <a className="footer__link" href="https://github.com/izaqueIsrael">
          Izaque
        </a>
        ,{' '}
        <a className="footer__link" href="https://github.com/joaofq">
          João Fernando
        </a>
        ,{' '}
        <a className="footer__link" href="https://github.com/evaristomat">
          Matheus
        </a>
        ,{' '}
        <a className="footer__link" href="https://github.com/NunoMac">
          Nuno
        </a>
        .
      </p>
      <p>1º Hackatoon da Practicum - Brasil</p>
      <a
        className="footer__credit"
        href="https://www.flaticon.com/br/icones-gratis/mascara-de-carnaval"
        title="mascara de carnaval ícones"
      >
        Créditos do favicon: Máscara de carnaval ícones criados por IconMarketPK
        - Flaticon
      </a>
    </footer>
  );
}

export default Footer;
