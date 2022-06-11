import { API_URL } from "../constants/API";
import axios from 'axios';

export type loginBody = {
    email: String,
    password: String
}

export type loginResponse = {
    data: {
        accessToken: String
    }
}
export default class API {
    apiUrl: String;
    constructor() {
        this.apiUrl = API_URL
    }

    login(user: loginBody) {
        axios({
            method: 'post',
            data: user,
            url: `${this.apiUrl}/login`,
        }).then((response: loginResponse) => {
            console.log(response.data);
        });

    }
}