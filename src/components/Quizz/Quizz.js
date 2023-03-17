import './quizz.css';

function Quizz() {
  // const [genero, setGenero] = useState('');
  // const [escolaridade, setEscolaridade] = useState('');
  // const [estadoCivil, setEstadoCivil] = useState('');
  // const [renda, setRenda] = useState('');
  // const resposta = {
  //   genero,
  //   escolaridade,
  //   estadoCivil,
  //   renda
  // };
  // console.log(resposta);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // Foi mal ae meu nobre que está trabalhando nisso, pedi para o chata gpt converter meus forms elements, mas ele entregou isso que não funciona :I
  return (
    <div className='quizz'>
      <h1>Eu sou quizz</h1>
      <htmlForm className='form'>
        <div>
          <label htmlhtmlFor='genero' >Gênero</label>
          <select id='genero' name='genero'>
            <option value='Masculino'>Masculino</option>
            <option value='Feminino'>Feminino</option>
            <option value='Homossexual'>Homossexual</option>
            <option value='Outro'>Outro</option>
          </select>
          <label htmlhtmlFor='escolaridade'>Escolaridade</label>
          <select id='escolaridade' name='escolaridade'>
            <option value='fundamental'>Fundamental</option>
            <option value='medio'>Ensino Médio</option>
            <option value='superior incompleto'>Ensino Superior Incompleto</option>
            <option value='superior completo'>Ensino Superior Completo</option>
            <option value='outro'>Outro</option>
          </select>
        </div>
        <div>
          <label htmlhtmlFor='estado civil'>Estado Civil</label>
          <select id='estadoCivil' name='estadoCivil'>
            <option value='soleitro'>Solteiro</option>
            <option value='casado'>Casado</option>
          </select>
          <label htmlhtmlFor='renda'>Faixa de Renda</label>
          <select id='renda' name='renda'>
            <option value='Nao sabe'>Não sei</option>
            <option value='Prefiro nao inhtmlFormar'>Prefiro Não inhtmlFormar</option>
            <option value='1'>até 1 salário</option>
            <option value='2'>até 2 salários</option>
            <option value='3'>até 3 salários</option>
            <option value='outro'>outro</option>
          </select>
        </div>
        <button type='submit'>Enviar</button>
      </htmlForm>
    </div>
  );
}

export default Quizz;
