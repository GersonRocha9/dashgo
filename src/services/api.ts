import axios from "axios";

export const api = axios.create({
  baseURL: "https://projeto-busca-saude-previa.herokuapp.com",
});
