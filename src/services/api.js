import axios from "axios";

// Configuração da API com Basic Auth
const api = axios.create({
  baseURL: "http://ec2-54-91-215-149.compute-1.amazonaws.com",
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: "psAdmin", // Substitua pelo usuário fornecido
    password: "goledger", // Substitua pela senha fornecida
  },
});

export default api;
