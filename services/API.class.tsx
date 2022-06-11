import { API_URL } from "../constants/API";
import axios from 'axios';

export type LoginUser = {
    email: String,
    password: String
}

export type loginResponse = {
    data: {
        accessToken: String
    }
}

export type RegisterUser = {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    phone: String
}

export type registerResponse = {
    data: {
        email: String,
        firstName: String,
        lastName: String,
        phone: String
    }
}
export default class API {
    apiUrl: String;
    constructor() {
        this.apiUrl = API_URL
    }

    async login(user: LoginUser) {
        axios({
            method: 'post',
            data: user,
            url: `${this.apiUrl}/login`,
        }).then((response: loginResponse) => {
            console.log(response.data);
        });
    }

    async register(user: RegisterUser) {
        axios({
            method: 'post',
            data: user,
            url: `${this.apiUrl}/users`,
        }).then((response: registerResponse) => {
            console.log(response.data);
        });
    }
}