import { API_URL } from "../constants/API";
import axios from 'axios';
import { loginResponse, LoginUser, registerResponse, RegisterUser } from "../types";
export default class API {
    apiUrl: String;
    constructor() {
        this.apiUrl = API_URL
    }

    async login(user: LoginUser) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                data: user,
                url: `${this.apiUrl}/login`,
            }).then((response: loginResponse) => {
                console.log(response.data);
                resolve(response.data);
            }).catch((err) => {
                console.log(err);
                reject(err);
            });
        })
    }

    async register(user: RegisterUser) {
        console.log(`${this.apiUrl}/users`)
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                data: user,
                url: `${this.apiUrl}/users`,
            }).then((response: registerResponse) => {
                console.log(response.data);
                resolve(response.data);
            }).catch((err) => {
                console.log(err);
                reject(err);
            });
        })

    }
}