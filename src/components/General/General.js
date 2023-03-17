import './general.css';
import graficoteste from '../../images/graficoteste.png';

function General() {
  return (
    <div className="general">
      <h2 className="section__subtitle">O Carnaval de BH é para você?</h2>
      <p>
        Ah, o carnaval de Belo Horizonte... Não tem como não amar essa festa!
        Todo mundo se fantasia, canta, dança, e esquece dos problemas da vida
        por alguns dias. É aquele momento em que a cidade vira um verdadeiro mar
        de gente, com cores e sons por todos os lados. Tem bloco de tudo quanto
        é jeito: tem bloco de rua, bloco de marchinha, bloco de samba, bloco de
        pagode, bloco de rock, bloco de funk... É uma diversidade incrível! Sem
        falar nas pessoas, que são de todas as idades, gêneros, raças e estilos.
        Mas aí vem a pergunta: o carnaval de Belo Horizonte é para todo mundo?
      </p>
      <div className="section__container">
        <div className="section__text">
          <h2 className="section__subtitle">Desbravando Mitos</h2>
          <p className="section__quote">
            “Antes solteiro no dia dos namorados, que namorando no Carnaval”
          </p>
          <p className="section__paragraph">
            O Carnaval não deveria ser visto como um evento exclusivo para
            ninguém. Apesar de 75% do público carnavalesco ser solteiro, é uma
            ótima oportunidade para casais se divertirem. Já que de casados até
            viúvos participam, não há restrições para quem está comprometido!
          </p>
        </div>
        <div className="section__chart">
          <img src={graficoteste} />
        </div>
      </div>
    </div>
  );
}

export default General;
