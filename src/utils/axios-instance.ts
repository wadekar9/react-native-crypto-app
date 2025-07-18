import axios, { AxiosInstance } from "axios";
import Config from "react-native-config";

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: Config.API_URL,
    headers: {
        "x-cg-pro-api-key": Config.API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    timeout: 50000
})