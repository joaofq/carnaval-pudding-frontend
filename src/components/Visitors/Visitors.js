import './visitors.css';
import graficoteste from '../../images/graficoteste.png';
import AvalGeneroChart from '../Charts/AvalGeneroChart/AvalGeneroChart';
import AvalAgeChart from '../Charts/AvalAgeChart/AvalAgeChart';
import AvalBlocoChart from '../Charts/AvalBlocoChart/AvalBlocoChart';
import AvalSpentChart from '../Charts/AvalSpentChart/AvalSpentChart';
import PeoplesRegionChart from '../Charts/PeoplesRegionChart/PeoplesRegionChart';
import PeoplesTransportationChart from '../Charts/PeoplesTransportationChart/PeoplesTransportationChart';
import SpentCategoriesChart from '../Charts/SpentCategoriesChart/SpentCategoriesChart';

function Visitors() {
  return (
    <div className='visitors'>
      <h2 className='section__subtitle'>Curiosidades do folião</h2>
      <p className='section__paragraph'>
        Não importa o seu gênero ou idade, a avaliação geral da folia é quase
        sempre a mesma para todos! Muitos acreditam que o carnaval é uma festa
        para jovens, porém, pessoas com mais de 65 anos tendem a gostar ainda
        mais da farra.
      </p>
      <div className='section__container'>
        <div className='section__chart'>
          <AvalGeneroChart />
        </div>
        <div className='section__chart'>
          <AvalAgeChart />
        </div>
      </div>
      <p className='section__paragraph'>
        Um fato curioso é que aqueles que gastam menos gostam ainda mais da
        experiência! Há uma oferta muito grande de bloquinhos de rua gratuitos,
        o carnaval é simplesmente a festa mais democrática!
      </p>
      <div className='section__container'>
        <div className='section__chart'>
          <AvalBlocoChart />
        </div>
        <div className='section__chart'>
          <AvalSpentChart />
        </div>
      </div>
      <div className='visitors__divisor'></div>
      <h1 className='section__title'>
        É de fora? Não tem problema, pegue seu glitter e vem com a gente!
      </h1>
      <div className='section__container'>
        <div className='section__text'>
          <h2 className='section__subtitle'>
            Dá uma olhada no percentual de pessoas por região que vêm visitar
            Belo Horizonte para a festa
          </h2>
          <p className='section__paragraph'>
            Não importa se você é do Nordeste, Sul, Centro-Oeste, Norte ou
            Sudeste, o importante é aproveitar tudo o que o carnaval de Belo
            Horizonte tem a oferecer. Opções não faltam quando o assunto é
            chegar lá, só depende do quanto estiver disposto a pagar.Vamos
            mostrar os meios mais usados para chegar em Belo Horizonte.
          </p>
        </div>
        <div className='section__chart'>
          <PeoplesRegionChart />
        </div>
      </div>
      <div className='section__container reverse'>
        <div className='section__chart'>
          <PeoplesTransportationChart />
        </div>
        <div className='section__text'>
          <h2 className='section__subtitle'>Trem bão demais da conta!</h2>
          <p className='section__paragraph'>
            Apesar de ser uma palavra tão usada pelos mineiros, o trem não é o
            meio de transporte mais utilizado pelos visitantes para chegar a BH.
            Falando nisso, você sabia que tem um trem que liga Vitória a Belo
            Horizonte? Veja mais informações{' '}
            <a
              href='https://www.temqueir.com.br/2017/01/trem-da-vale-vitoria-minas.html#:~:text=Partiu%3F,Belo%20Horizonte%2C%20em%20Minas%20Gerais'
              target='_blank'
            >
              nessa página
            </a>
            .
          </p>
        </div>
      </div>
      <h2 className='section__subtitle'>Nuuuh! Quanto eu vou gastar?</h2>
      <p className='section__paragraph'>
        Falando em gastos, é importante começar a planejar sua ida com
        antecedência. Talvez falar com algum amigo ou parente sobre reservar um
        espacinho da casa dele, dá uma olhada como ficariam seus gastos no
        geral. Se arranjar uma hospedagem na casa de alguém fica bem mais em
        conta!
      </p>
      <div className='big-chart'>
        <SpentCategoriesChart />
      </div>
      <h1 className='section__title'>3 figuras carimbadas do Carnaval de BH</h1>
      <h2 className='section__subtitle'>👑 Coroas</h2>
      <p className='section__paragraph'>
        Acompanhados por seus maridos e esposas, eles(as) já conhecem a vida e
        vão para a folia sem medo de ser feliz. Grande parte já é frequentadora
        assídua do Carnaval de BH continua voltando porque sabe que é uma festa
        maravilhosa.
      </p>
      <h2 className='section__subtitle'>🎉 Poupadores(as)</h2>
      <p className='section__paragraph'>
        Essa figura brinca o carnaval da melhor maneira que existe: gastando
        pouco. Na maioria solteiros, mostram que o carnaval belo-horizontino tem
        opções para todos os bolsos.
      </p>
      <h2 className='section__subtitle'>💸 Bens-de-vida</h2>
      <p className='section__paragraph'>
        Solteiros(as) com renda alta, são foliões adultos que frequentam o
        carnaval de Belo Horizonte para curtir o melhor que a festa tem para
        oferecer. Sem ter dinheiro como um empecilho, os bens-de-vida não perdem
        tempo na hora de se divertir.
      </p>
      <div className='visitors__end-image' aria-label="pessoas acenando"></div>
    </div>
  );
}

export default Visitors;