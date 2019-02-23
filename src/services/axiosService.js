import axios from 'axios';
import LoginService from './loginService.js';

const BASE_URL = 'https://api.devrant.thusitha.site/v1/';
// const BASE_PORT = 3000;

var errros = {
  'INVALID_CREDENTIALS': 'Invalid username or password'
}

export default class AxiosService {

  static devRantRequest(data) {
    return new Promise((resolve, reject) => {

    const token = LoginService.getToken();
    if (token) {
       data.headers =  {
        'X-Token': String(token)
       }
    }
    axios(data)
      .then(response => {
        if (response.data.ok) {
          resolve(response.data);
        } else {
          reject(errros[response.error]);
        }
      })
      .catch(error => {
        reject(error);
      });
    });

  }

}