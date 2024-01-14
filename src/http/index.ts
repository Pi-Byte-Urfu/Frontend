import axios, { AxiosError } from "axios"
import { store } from ".."
import { error } from "console";
import { redirect } from "react-router-dom";

export const API_URL = 'http://5.23.54.98:8080/api/v1/'
const API_URL2= 'https://jsonplaceholder.typicode.com/';

export const $api = axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'AuthInfo': '',
    withCredentials: true,
    mode: 'no-cors',
  }
})

export const $api2 = axios.create({
  baseURL: API_URL2,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    "AuthInfo": 'dd',
    withCredentials: true,
    mode: 'no-cors',
  }
});

$api2.interceptors.request.use((config) => {
  config.headers["Authinfo"]= JSON.stringify(store.user)
  return config;
})


$api.interceptors.request.use((config) => {
  config.headers["AuthInfo"] = JSON.stringify(store.user)
  return config;
})

$api.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },
  (error) => {
    console.log(error)
    if (error.response != undefined) {
      if (axios.isAxiosError(error) && (error.response.status == 400 || error.response.status == 422)) {
        return error.response;
      } 

      return redirect('/ErrorPage');
    }
    return redirect('/ErrorPage')   
  }
)