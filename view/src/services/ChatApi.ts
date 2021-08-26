import { IChatApi } from "@/types/IChatApi";
import { Sala } from "@/types/Sala";
import { IChatResponse } from "./chatResponse";
import axios, { AxiosResponse } from "axios";


export class ChatApi implements IChatApi {

    private readonly url = "http://localhost:8001";

    async adicionar(chat: Sala): Promise<void> {
        if (chat.nome === "") throw new Error("Não é possível entrar com este nome.");

        await axios.post(`${this.url}/conversas/adicionar/${chat.nome}`);
    }

    async enviar(mensagem: string, chat: Sala): Promise<void> {
        await axios.post(`${this.url}/conversas/mensagens/adicionar`, {
            nome: chat.nome,
            mensagem: mensagem
        });
    }

    async entrar(nome: string): Promise<Sala> {
        if (nome === "") throw new Error("Não é possível entrar com este nome.");

        await axios.post(`${this.url}/conversas/adicionar/${nome}`);

        return new Sala(nome);
    }

    async pegarChats(): Promise<Sala[]> {
        const response: AxiosResponse<IChatResponse[]> = await axios.get(`${this.url}/conversas`);
        const conversas = response.data;

        return conversas.map(c => new Sala(c.nome, c._mensagens));
    }

}