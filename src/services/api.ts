import axios from "axios";

export const api = axios.create({
  baseURL: "https://dtmoney-dusky-alpha.vercel.app/api",
});
