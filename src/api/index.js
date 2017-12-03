import axios from 'axios';

const API = {
  request(params = null) {
    const baseUrl = 'https://api.coinmarketcap.com/v1/ticker/';
    const queryString = params === null ? baseUrl : `${baseUrl}${params}`;
    return axios.get(queryString);
  },
  requestAll(params = null) {
    const queryString = this.formatParams(params);
    return this.request(queryString);
  },
  requestSpecific(query, params = null) {
    const queryString = this.formatParams(params);
    return this.request(`${query}/${queryString}`);
  },
  formatParams(params) {
    if (!params) return null;
    let queryString = '?';
    Object.keys(params).forEach((param, index) => {
      const prepend = index === 0 ? '' : '&';
      const string = `${prepend}${param}=${params[param]}`;
      queryString += string;
    });
    return queryString;
  },
};

export { API as default };
