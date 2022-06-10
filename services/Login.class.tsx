import axios from 'axios';
import API from './API.class';

export default class Login extends API {

    login (email, password) {
        axios({
            method: 'get',
            url: `${this.apiUrl}`,
          }).then((response) => {
            console.log(response.data);
          });
          
    }

}