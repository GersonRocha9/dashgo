import axios from "axios";
import { parseCookies } from "nookies";

const cookies = parseCookies();

export const api = axios.create({
  baseURL: "https://projeto-busca-saude-previa.herokuapp.com",
  headers: {
    Authorization: `Bearer ${cookies["findhealth.token"]}`,
  },
});
