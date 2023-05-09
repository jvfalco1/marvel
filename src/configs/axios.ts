/* eslint-disable no-console */
import axios from "axios";
import Config from "react-native-config";
import { stringMd5, binaryMd5 } from "react-native-quick-md5";

const baseURL = "https://gateway.marvel.com/v1/public/";
const pub = "d78552642e65f5eca6d2f116b85d488e";
const priv = "8e32f1443d34ad9d7d1872d391d01634766fbe8c";

const apikey = pub;

const ts = Number(new Date());
console.log({ Config });

const hash = binaryMd5(ts + priv + pub);

console.log({
  hash,
  apikey,
});

const api = axios.create({
  baseURL,
  params: {
    apikey,
    hash,
    ts,
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
