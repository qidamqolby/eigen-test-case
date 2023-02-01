import axios from "axios";

export const API = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    Authorization: "Bearer f42869d1f3fd4f11b79ae357c78ebd53",
  },
});
