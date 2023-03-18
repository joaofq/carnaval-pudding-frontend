import './header.css';
import mascaraheader from '../../images/mascaraheader.png';
import React, { useState, useRef, useEffect } from 'react';
import flamula from '../../images/flamula.jpg'

function Header() {
  const setHeaderBackground = () => {
    const header = document.querySelector('#header');
    header.style.backgroundImage = `url(${flamula})`;
  };
  return (
    <div id="header" className="header" ref={setHeaderBackground}>
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
