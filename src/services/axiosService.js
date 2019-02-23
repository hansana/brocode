import axios from 'axios';

const BASE_URL = 'https://api.devrant.thusitha.site/v1/';
// const BASE_PORT = 3000;

export default class AxiosService {
  static getRequest(endPoint, jsonBody, jwtToken) {
    let url = BASE_URL + endPoint;
    return axios
      .get(url)
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
      });
  }

  static postRequest(endPoint, jsonBody, jwtToken) {
    let url = BASE_URL + endPoint;
    let header =  {
      'Content-Type': 'application/json',
      'X-Token': jwtToken 
    };

    return axios
      .post(url, jsonBody, {headers: header})
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  }
}