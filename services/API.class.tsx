import { API_URL } from "../constants/API";
import axios from 'axios';
import { loginResponse, LoginUser, registerResponse, RegisterUser, UserProfile, Post, ResponsePost } from "../types";
export default class API {
    apiUrl: String;
    constructor() {
        this.apiUrl = API_URL;
    }

    async login(user: LoginUser): Promise<string> {
        return axios({
            method: 'post',
            data: user,
            url: `${this.apiUrl}/login`,
        }).then((response: loginResponse) => {
            return response.data.accessToken;
        }).catch((err) => {
            console.log(err);
            throw err;
        });
    };


    async register(user: RegisterUser): Promise<UserProfile> {
        return axios({
            method: 'post',
            data: user,
            url: `${this.apiUrl}/users`,
        }).then((response: registerResponse) => {
            return response.data;
        }).catch((err) => {
            console.log(err);
            throw err;
        });
    }

    async readProfile(token: string): Promise<UserProfile> {
        return axios({
            method: 'get',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            url: `${this.apiUrl}/users/me`,
        }).then((response: registerResponse) => {
            return response.data;
        }).catch((err) => {
            console.log(err);
            throw err;
        });
    }

    async createPost(post: Post, token: string): Promise<ResponsePost['data']> {
        return axios({
            method: 'post',
            data: post,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            url: `${this.apiUrl}/posts`,
        }).then((response: ResponsePost) => {
            return response.data;
        }).catch((err) => {
            throw err;
        });

    }
}