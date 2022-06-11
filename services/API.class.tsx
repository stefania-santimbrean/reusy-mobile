import { API_URL } from "../constants/API";
import axios from 'axios';
import { loginResponse, LoginUser, registerResponse, RegisterUser, UserProfile } from "../types";
export default class API {
    apiUrl: String;
    constructor() {
        this.apiUrl = API_URL;
    }

    async login(user: LoginUser): Promise<string> {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                data: user,
                url: `${this.apiUrl}/login`,
            }).then((response: loginResponse) => {
                resolve(response.data.accessToken);
            }).catch((err) => {
                console.log(err);
                reject(err);
            });
        })
    }

    async register(user: RegisterUser): Promise<UserProfile> {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                data: user,
                url: `${this.apiUrl}/users`,
            }).then((response: registerResponse) => {
                resolve(response.data);
            }).catch((err) => {
                console.log(err);
                reject(err);
            });
        })
    }

    async readProfile(token: string): Promise<UserProfile> {
        return new Promise(async (resolve, reject) => {
            axios({
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                url: `${this.apiUrl}/users/me`,
            }).then((response: registerResponse) => {
                resolve(response.data);
            }).catch((err) => {
                console.log(err);
                reject(err);
            });
        })
    }
}