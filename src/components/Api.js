export default class Api {
  constructor({ link, token, key }) {
    this._link = link;
    this._token = token;
    this._key = key;
  }

  _checkResponse(res) {
    if (!res.ok)
      return Promise.reject(`${res.status} error!`);
    return res.json();
  }

  getInfo(data) {
    console.log(data)
    const encodedData = encodeURIComponent(JSON.stringify(data));
    return fetch(`${this._link}${this._token}&flow_key=${this._key}&data=${encodedData}`, {
      headers: {
        authorization: this._token
      },
    })
      .then(res => this._checkResponse(res));
  }

  // setInfo({ Genero, Escolaridade, Estado_civil, Faixa_renda }) {
  //   return fetch(this._link, {
  //     method: 'POST',
  //     headers: {
  //       authorization: this._token,
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ 'Genero': Genero, 'Escolaridade': Escolaridade, 'Estado_civil': Estado_civil, 'Faixa_renda': Faixa_renda })
  //   })
  //     .then(res => this._checkResponse(res))
  // }

}