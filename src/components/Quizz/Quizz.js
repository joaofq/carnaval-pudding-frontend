import './quizz.css';
import React, { useState } from 'react';
import { api } from '../..';

function Quizz() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const value = event.target.name === 'idade' ? parseInt(event.target.value) : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(api.getInfo([formData]))
  }
  return (
    <div className='quizz'>
      <h1>Eu sou quizz</h1>
      <div className='quizz__container'>
        <form className='form' name='form' onSubmit={handleFormSubmit}>
          <div className='form__container'>
            <label htmlFor='genero' className='form__label'>Gênero</label>
            <select id='genero' name='genero' className='form__select' onChange={handleInputChange}>
              <option disabled>Selecione</option>
              <option value='Masculino'>Masculino</option>
              <option value='Feminino'>Feminino</option>
            </select>
          </div>
          <div className='form__container'>
            <label htmlFor='idade' className='form__label'>Idade</label>
            <input id='idade' name='idade' className='form__select' onChange={handleInputChange} />
          </div>
          <div className='form__container'>
            <label htmlFor='estado_civil' className='form__label'>Estado Civil</label>
            <select id='estado_civil' name='estado_civil' className='form__select' onChange={handleInputChange}>
              <option disabled>Selecione</option>
              <option value='Solteiro (a)'>Solteiro (a)</option>
              <option value='Casado (a)'>Casado (a)</option>
              <option value='Divorciado (a)'>Divorciado (a)</option>
              <option value='Viuvo (a)'>Viuvo (a)</option>
              <option value='Outro'>Outro</option>
            </select>
          </div>
          <div className='form__container'>
            <label htmlFor='faixa_renda' className='form__label'>Faixa de Renda</label>
            <select id='faixa_renda' name='faixa_renda' className='form__select' onChange={handleInputChange}>
              <option disabled>Selecione</option>
              <option value='Até um salário mínimo (R$ 954,00)'>Até um salário mínimo (R$ 954,00)</option>
              <option value='De 1 a 2 salários (R$ 954,00 - R$ 1.908,00)'>De 1 a 2 salários (R$ 954,00 - R$ 1.908,00)</option>
              <option value='De 2 a 4 salários (R$ 1.908,00 - R$ 3816,00)'>De 2 a 4 salários (R$ 1.875,00 - R$ 3.816,00)</option>
              <option value='De 4 a 8 salários (R$ 3.816,00 - R$ 7.632,00)'>De 4 a 8 salários (R$ 3.749,00 - R$ 7.632,00)</option>
              <option value='Acima de 8 salários (acima de R$ 7.632,00)'>Acima de 8 salários (acima de R$ 7.632,00)</option>
            </select>
          </div>
          <div className='form__button__container'>
            <button type='submit' className='form__button'>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Quizz;
