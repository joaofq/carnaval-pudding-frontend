import './general.css';
import graficoteste from '../../images/graficoteste.png';
import dancando from '../../images/dancandoSemFundo.png';

function General() {
  return (
    <div className="general">
      <h2 className="section__subtitle">O Carnaval de BH é para você?</h2>
      <p className="section__paragraph">
        Ah, o carnaval de Belo Horizonte... Como não amar essa festa? Todo mundo
        se fantasia, canta, dança e esquece dos problemas por alguns dias. É
        aquele momento em que a cidade vira um verdadeiro mar de gente, com
        cores e sons por todos os lados. Tem bloco de tudo quanto é jeito: bloco
        de samba, bloco de marchinha, bloco de pagode, bloco de rock, bloco de
        funk e até bloco de músicas o Wando! Tem pra todo gosto. Sem falar na
        incrível diversidade de pessoas de todas as idades, gêneros, raças e
        estilos. Mas fica a pergunta: o carnaval de Belo Horizonte é para todo
        mundo?
      </p>
      <div className="section__container">
        <div className="section__text">
          <h2 className="section__subtitle">Desbravando Mitos</h2>
          <p className="section__quote">
            “Antes solteiro no dia dos namorados, que namorando no carnaval”
          </p>
          <p className="section__paragraph">
            Tem base um trem desse? O carnaval não é exclusivo para solteiros.
            Apesar de 75% do público carnavalesco ser solteiro, é uma ótima
            oportunidade para os casais se divertirem. De casados a viúvos, tem
            espaço para todos curtirem!
          </p>
        </div>
        <div className="section__chart">
          <img src={graficoteste} className="chart" />
        </div>
      </div>
      <div className="section__container reverse">
        <div className="section__chart">
          <img src={graficoteste} className="chart" />
        </div>
        <div className="section__text">
          <h1 className="section__title">“Carnaval bom é só no camarote”</h1>
          <p className="section__paragraph">
            Isso é balela! Relaxa que eu tenho uma boa notícia pra você! A festa
            é do povo e, por isso, dá pra aproveitar a folia sem desembolsar
            muita grana. O gráfico mostra que foliões com todo tipo de renda se
            jogam na folia.
          </p>
        </div>
      </div>
      <img className={dancando} />
    </div>
  );
}

export default General;
