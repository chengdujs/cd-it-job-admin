import axios from 'axios';

export class BaseService {
  constructor() {

  }

  get(url, options) {
    return this._request('get', url, options);
  }

  post(url, data, options) {
    return this._request('post', url, options);
  }

  put(url, data, options) {
    return this._request('put', url, options);
  }

  delete(url, options) {
    return this._request('delete', url, options);
  }

  _request(method, url, data, options) {
    const opt = {
      method,
      url,
      data
    };
    return axios(opt);
  }
}
