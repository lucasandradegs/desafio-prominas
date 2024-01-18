import axios from "axios"

export const api = axios.create({
    baseURL: "https://desafio-prominas.vercel.app/api"
})
