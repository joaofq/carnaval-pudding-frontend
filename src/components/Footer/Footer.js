import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <p>
        Desenvolvido por: <a href='https://github.com/diego-analytics'>Diego</a>, <a href='https://github.com/Aguiar-Gabriel'>Gabriel</a>, <a href='https://github.com/hainaha'>Haina</a>, <a href='https://github.com/izaqueIsrael'>Izaque</a>, <a href='https://github.com/joaofq'>João Fernando</a>, <a href='https://github.com/evaristomat'>Matheus</a>, <a href='https://github.com/NunoMac'>Nuno</a>.
      </p>
      <p>1º Hackatoon da Practicum - Brasil</p>
      <a
        className='footer__link'
        href='https://www.flaticon.com/br/icones-gratis/mascara-de-carnaval'
        title='mascara de carnaval ícones'
      >
        Créditos do favicon: Máscara de carnaval ícones criados por IconMarketPK
        - Flaticon
      </a>
    </div>
  );
}

export default Footer;
