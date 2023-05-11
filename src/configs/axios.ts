/* eslint-disable no-console */
import axios from "axios";
import Config from "react-native-config";
import { binaryMd5 } from "react-native-quick-md5";

const baseURL = "https://gateway.marvel.com/v1/public/";

const ts = Number(new Date());

const privateKey = Config.PRIVATE_KEY as string;
const apikey = Config.PUBLIC_KEY as string;

const hash = binaryMd5(ts + privateKey + apikey);

const api = axios.create({
  baseURL,
  params: {
    apikey,
    hash,
    ts,
  },
});

export default api;
