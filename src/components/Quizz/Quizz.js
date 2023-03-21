import './quizz.css';
import React, { useState, useRef, useEffect } from 'react';
import { api } from '../..';

function Quizz() {
  const blocoBahianasOusadas = {
    title: 'Baianas Ozadas!',
    text: `Que tal curtir o Carnaval de Belo Horizonte do jeito baiano com saias, turbantes e balangandãs?
    O bloco Baianas Ozadas trouxe à festa um tempero novinho em folha: os ritmos e músicas da
    Bahia com muita irreverência e originalidade. A "ozadia" é contagiante e fez o bloco ser seguido
    por mais de 500 mil foliões no Carnaval de 2019. Partiu curtir esse agito?`,
  };

  const blocoMonobloco = {
    title: 'Monobloco!',
    text: `O Monobloco é um dos blocos mais conhecidos do Rio de Janeiro, e agora vai fazer a alegria dos
    foliões em Belo Horizonte! Com 150 integrantes em sua bateria, eles comandam o som com
    surdos, caixas, chocalhos, tamborins, agogôs, repique e cuíca. E aí, preparado para dançar até
    cansar? Vem com o Monobloco que a festa tá garantida!`,
  };

  const blocoEntaoBrilha = {
    title: 'Então Brilha!',
    text: `O bloco Então, Brilha! é simplesmente maravilhoso! Com muita rosa e dourado, eles levam
    alegria e diversidade às ruas da capital mineira. E, claro, muita música boa para fazer o Carnaval
    Análise blocos de carnaval 2
    de rua ressurgir com força total! Afinal, como eles mesmos dizem, "gente é pra brilhar"! Então,
    não fique fora dessa festa! Vem brilhar com o Então, Brilha!`,
  };

  const blocoDespedidaDeCarnaval = {
    title: 'Despedida de Carnaval!',
    text: `Se você é daqueles que não quer que o Carnaval acabe nunca, então o bloco da Despedida de
    Carnaval é perfeito para você! Criado em 2015 em homenagem ao Bloco da Saudade, ele é a
    desculpa perfeita para prolongar a folia e dizer adeus ao Carnaval com chave de ouro! Então,
    bora curtir a saidêra e se despedir da festa mais animada do ano em grande estilo!`,
  };

  const blocoJuventudeBronzeada = {
    title: 'Juventude Bronzeada!',
    text: `Quer dar uma agitada na sua vida no Carnaval de Belo Horizonte? Então vem conhecer o
    Juventude Bronzeada! Criado em 2013, esse bloco é pura animação e política. Além de fomentar
    a festa mais animada do ano, eles querem mudar o mundo! Então, bora curtir uma festa cheia de
    ritmo e mudança!`,
  };

  const blocoQuandoComeSeLambuza = {
    title: 'Quando come se lambuza!',
    text: `Olha só quem chegou: o bloco Quando Come Se Lambuza! Desde 2014, esse bloco tem feito a
    alegria das ruas de Belo Horizonte com seu som contagiante! Com cerca de 180 ritmistas e
    instrumentos de escola de samba, esse bloco é garantia de muita diversão! Então, bora se jogar
    nesse bloco delicioso e se lambuzar de música boa!`,
  };

  const blocoAngolaJanga = {
    title: 'Bloco Angola Janga!',
    text: `Afrocentrado, o Bloco Angola Janga busca criar mais um espaço negro no Carnaval de BH.
    Tocando desde ritmos afro-brasileiros mais antigos até os mais recentes, você vai ouvir de axé a
    hip-hop enquanto acompanha seu percurso. Aqui, a folia dá espaço também para reflexão e
    construção de uma cultura brasileira mais inclusiva.`,
  };

  const blocoHavayanasUsadas = {
    title: 'Havayanas Usadas!',
    text: `Criado em 2017, o Havayanas Usadas toca o melhor do axé dos anos 80 e 90. É o bloco dos
    batuqueiros, que transformam até latinha vazia em instrumento musical. Ele é famoso por
    Análise blocos de carnaval 3
    arrastar multidões pelas ruas belo-horizontinas, saindo pelas ruas do bairro Pompeia, na região
    Leste da capital mineira.`,
  };

  const blocoTchanzinhoZonaNorte = {
    title: 'Tchanzinho Zona Norte!',
    text: `Segura o Tchanzinho Zona Norte! É isso mesmo, um bloco focado em tocar as músicas da
    saudosa banda de axé dos anos 90, É O Tchan! Mas não é só isso, o repertório também é
    antenado e contempla os ritmos mais modernos, como funk, piseiro e arrocha.`,
  };

  const blocoBeijoDoWando = {
    title: 'Beiço do Wando!',
    text: `Meu iaiá, meu ioiô, você vai se acabar de paixão no bloco mais brega de Belo Horizonte. Pra
    provar que nem só de axé vive o Carnaval, o bloco Beiço do Wando já teve até a Gretchen em seu
    trio elétrico. Além de Wando, músicas de Reginaldo Rossi, Sidney Magal, Roupa Nova, entre
    outros artistas românticos, complementam o repertório durante o cortejo. Tocando nessa festa, há
    uma bateria com 350 integrantes e uma banda com 8.`,
  };

  const blocoOutros = {
    title: 'Outros',
    text: `Você é incrível demais pra que a gente te indique só um bloco. Por isso, te indicamos o
    CARNAVAL INTEIRO! É isso mesmo, não há dúvidas que você vai se divertir muito brincando
    em BH, e a certeza é tanta que te indicamos só ir. Curta o axé, o brega, o funk, o samba sem
    preocupações. Você é de casa!`,
  };

  const serverError = {
    title: 'Error',
    text: 'Sorry, something went wrong with the request. There may be a connection issue or the server may be down. Please try again later.',
  };

  const [formData, setFormData] = useState({
    genero: null,
    idade: null,
    estado_civil: null,
    faixa_renda: null,
  });

  const formRef = useRef(null);

  const handleInputChange = (event) => {
    const value =
      event.target.name === 'idade'
        ? parseInt(event.target.value)
        : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
    if (event.target.nextElementSibling !== null)
      if (event.target.value > 0 && event.target.value <= 200) {
        event.target.nextElementSibling.classList.add('form__error_disabled');
        event.target.classList.remove('form__input_error');
      } else {
        event.target.nextElementSibling.classList.remove(
          'form__error_disabled',
        );
        event.target.classList.add('form__input_error');
      }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formButton = formRef.current.querySelector(
      'button[name="formButton"]',
    );
    const inputGen = formRef.current.querySelector('#genero');
    const inputAge = formRef.current.querySelector('#idade');
    const inputEstado = formRef.current.querySelector('#estado_civil');
    const inputRenda = formRef.current.querySelector('#faixa_renda');
    formButton.textContent = 'Carregando';
    formButton.nextElementSibling.nextElementSibling.classList.remove(
      'button__loading_disabled',
    );
    formButton.parentElement.parentElement.parentElement.nextElementSibling.classList.add(
      'button__loading_disabled',
    );
    const data = await api.getInfo([formData]);
    if (typeof data[0].bloco === 'string' && data[0].bloco.trim() !== '') {
      setTextInPage(`Você deve ir para ${data[0].bloco}`);
      setFormData({
        genero: null,
        idade: null,
        estado_civil: null,
        faixa_renda: null,
      });
      inputGen.selectedIndex = 'null';
      inputAge.value = '';
      inputEstado.selectedIndex = 'null';
      inputRenda.selectedIndex = 'null';
    }
  };

  useEffect(() => {
    const { genero, idade, estado_civil, faixa_renda } = formData;
    const formButton = formRef.current.querySelector(
      'button[name="formButton"]',
    );
    if (
      genero &&
      idade &&
      estado_civil &&
      faixa_renda &&
      idade >= 0 &&
      idade <= 200
    ) {
      formButton.disabled = false;
      formButton.classList.remove('form__button_disabled');
    } else {
      formButton.disabled = true;
      formButton.classList.add('form__button_disabled');
    }
  }, [formData]);

  const setTextInPage = (arg) => {
    const textElement = document.querySelector('#text');
    const subTitleElement = document.querySelector('#subTitle');
    const titleElement = document.querySelector('#title');
    setterManager(titleElement, subTitleElement, textElement, arg);
  };

  const setterManager = (titleElement, subTitleElement, textElement, arg) => {
    if (
      titleElement &&
      subTitleElement &&
      textElement &&
      arg != '[object HTMLParagraphElement]'
    ) {
      if (arg == 'Você deve ir para Baianas Ozadas')
        theSetterInPage(
          blocoBahianasOusadas,
          subTitleElement,
          textElement,
          titleElement,
          arg,
        );
      if (arg == 'Você deve ir para MONOBLOCO')
        theSetterInPage(
          blocoMonobloco,
          subTitleElement,
          textElement,
          titleElement,
          arg,
        );
      if (arg == 'Você deve ir para Entao Brilha')
        theSetterInPage(
          blocoEntaoBrilha,
          subTitleElement,
          textElement,
          titleElement,
          arg,
        );
      if (arg == 'Você deve ir para Bloco Despedida de Carnaval')
        theSetterInPage(
          blocoDespedidaDeCarnaval,
          subTitleElement,
          textElement,
          titleElement,
          arg,
        );
      if (arg == 'Você deve ir para Juventude Bronzeada')
        theSetterInPage(
          blocoJuventudeBronzeada,
          subTitleElement,
          textElement,
          titleElement,
          arg,
        );
      if (arg == 'Você deve ir para Quando come se lambuza')
        theSetterInPage(
          blocoQuandoComeSeLambuza,
          subTitleElement,
          textElement,
          titleElement,
          arg,
        );
      if (arg == 'Você deve ir para Bloco Angola Janga')
        theSetterInPage(
          blocoAngolaJanga,
          subTitleElement,
          textElement,
          titleElement,
          arg,
        );
      if (arg == 'Você deve ir para Bloco Havayanas Usadas')
        theSetterInPage(
          blocoHavayanasUsadas,
          subTitleElement,
          textElement,
          titleElement,
          arg,
        );
      if (arg == 'Você deve ir para Tchanzinho Zona Norte')
        theSetterInPage(
          blocoTchanzinhoZonaNorte,
          subTitleElement,
          textElement,
          titleElement,
          arg,
        );
      if (arg == 'Você deve ir para Batiza')
        theSetterInPage(
          blocoBeijoDoWando,
          subTitleElement,
          textElement,
          titleElement,
          arg,
        );
      if (arg == 'Você deve ir para Outros')
        theSetterInPage(
          blocoOutros,
          subTitleElement,
          textElement,
          titleElement,
          arg,
        );
    } else {
      theSetterInPage(
        serverError,
        subTitleElement,
        textElement,
        titleElement,
        '',
      );
    }
  };

  const theSetterInPage = (
    bloco,
    subTitleElement,
    textElement,
    titleElement,
    arg,
  ) => {
    const formButton = formRef.current.querySelector(
      'button[name="formButton"]',
    );
    formButton.textContent = 'Enviar';
    formButton.nextElementSibling.nextElementSibling.classList.add(
      'button__loading_disabled',
    );
    subTitleElement.textContent = bloco.title;
    textElement.textContent = bloco.text;
    if (arg == 'Você deve ir para Batiza')
      titleElement.textContent = 'Você deve ir para Beijo do Wando';
    if (arg == 'Você deve ir para o bloco Outros')
      titleElement.textContent = 'Você é incrível!';
    else titleElement.textContent = arg;
    formButton.parentElement.parentElement.parentElement.nextElementSibling.classList.remove(
      'button__loading_disabled',
    );
  };

  return (
    <div className="quizz">
      <h2 className="quizz__title">Descubra qual é o seu bloco ideal</h2>
      <h3>Repita quantas vezes quiser</h3>
      <div className="quizz__container">
        <form
          className="form"
          name="form"
          onSubmit={handleFormSubmit}
          ref={formRef}
        >
          <div className="inputs__container">
            <div className="input__left">
              <div className="form__container">
                <label htmlFor="genero" className="form__label">
                  Gênero
                </label>
                <select
                  id="genero"
                  name="genero"
                  className="form__select"
                  onChange={handleInputChange}
                  defaultValue="null"
                >
                  <option value="null" disabled>
                    Selecione
                  </option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                </select>
              </div>
              <div className="form__container">
                <label htmlFor="idade" className="form__label">
                  Idade
                </label>
                <div className="input__container">
                  <input
                    id="idade"
                    name="idade"
                    className="form__select"
                    onChange={handleInputChange}
                  />
                  <span
                    id="age__error"
                    className="form__error form__error_disabled"
                  >
                    A idade deve ser um número inteiro maior que 0 e menor que
                    200
                  </span>
                </div>
              </div>
            </div>
            <div className="input__right">
              <div className="form__container">
                <label htmlFor="estado_civil" className="form__label">
                  Estado Civil
                </label>
                <select
                  id="estado_civil"
                  name="estado_civil"
                  className="form__select"
                  onChange={handleInputChange}
                  defaultValue="null"
                >
                  <option value="null" disabled>
                    Selecione
                  </option>
                  <option value="Solteiro (a)">Solteiro (a)</option>
                  <option value="Casado (a)">Casado (a)</option>
                  <option value="Divorciado (a)">Divorciado (a)</option>
                  <option value="Viuvo (a)">Viuvo (a)</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className="form__container">
                <label htmlFor="faixa_renda" className="form__label">
                  Faixa de Renda
                </label>
                <select
                  id="faixa_renda"
                  name="faixa_renda"
                  className="form__select"
                  onChange={handleInputChange}
                  defaultValue="null"
                >
                  <option value="null" disabled>
                    Selecione
                  </option>
                  <option value="Até um salário mínimo (R$ 954,00)">
                    Até um salário mínimo (R$ 954,00)
                  </option>
                  <option value="De 1 a 2 salários (R$ 954,00 - R$ 1.908,00)">
                    De 1 a 2 salários (R$ 954,00 - R$ 1.908,00)
                  </option>
                  <option value="De 2 a 4 salários (R$ 1.908,00 - R$ 3.816,00)">
                    De 2 a 4 salários (R$ 1.908,00 - R$ 3.816,00)
                  </option>
                  <option value="De 4 a 8 salários (R$ 3.816,00 - R$ 7.632,00)">
                    De 4 a 8 salários (R$ 3.816,00 - R$ 7.632,00)
                  </option>
                  <option value="Acima de 8 salários (acima de R$ 7.632,00)">
                    Acima de 8 salários (acima de R$ 7.632,00)
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="form__button__container">
            <button
              type="submit"
              name="formButton"
              className="form__button form__button_disabled"
              disabled
            >
              Enviar
            </button>
            <h3 className="form__text">Nenhum dado será coletado</h3>
            <div className="button__loading button__loading_disabled"></div>
          </div>
        </form>
      </div>
      <div className="result__container">
        <h3 id="title" className="result__title"></h3>
        <h4 id="subTitle" className="result__subtitle"></h4>
        <p id="text" className="result__text"></p>
      </div>
    </div>
  );
}

export default Quizz;
