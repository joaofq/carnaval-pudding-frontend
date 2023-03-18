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
    const encodedData = encodeURIComponent(JSON.stringify(data));
    return fetch(`${this._link}${this._token}&flow_key=${this._key}&data=${encodedData}`, {
      headers: {
        authorization: this._token
      },
    })
      .then(res => this._checkResponse(res));
  }
}