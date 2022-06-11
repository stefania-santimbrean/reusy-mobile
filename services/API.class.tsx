import { API_URL } from "../constants/API";
import axios from 'axios';
import { loginResponse, LoginUser, registerResponse, RegisterUser, UserProfile } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default class API {
    apiUrl: String;
    constructor() {
        this.apiUrl = API_URL;
    }
    async authHeader(): Promise<string> {
        const value = await AsyncStorage.getItem('@accessToken');
        return `Bearer ${value}`;
    }

    async login(user: LoginUser): Promise<void> {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                data: user,
                url: `${this.apiUrl}/login`,
            }).then(async (response: loginResponse) => {
                await AsyncStorage.setItem('@accessToken', response.data.accessToken);
                resolve();
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

    async readProfile(): Promise<UserProfile> {
        return new Promise(async (resolve, reject) => {
            const authHeader = await this.authHeader();
            axios({
                method: 'get',
                headers: {
                    'Authorization': authHeader
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