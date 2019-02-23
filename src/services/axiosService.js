import axios from 'axios';

const BASE_URL = 'https://api.devrant.thusitha.site/v1/';
// const BASE_PORT = 3000;

var errros = {
  'INVALID_CREDENTIALS': 'Invalid username or password'
}

export default class AxiosService {

  static getRequest(data) {
    return new Promise((resolve, reject) => {

      // if(isLogged){
      //   data.headers = {
      //     'X-token' : getToken()
      //   }
      // }

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