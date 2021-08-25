import { IChatApi } from "@/types/IChatApi";
import { Chat } from "@/types/Chat";
import axios, { AxiosResponse } from "axios";


export class ChatApi implements IChatApi {

    private readonly url = "http://localhost:8001";

    async adicionar(chat: Chat): Promise<void> {
        if (chat.nome === "") throw new Error("Não é possível entrar com este nome.");

        await axios.post(`${this.url}/conversas/adicionar/${chat.nome}`);
    }

    async enviar(mensagem: string, chat: Chat): Promise<void> {
        await axios.post(`${this.url}/conversas/mensagens/adicionar`, {
            nome: chat.nome,
            mensagem: mensagem
        });
    }

    async entrar(nome: string): Promise<Chat> {
        if (nome === "") throw new Error("Não é possível entrar com este nome.");

        await axios.post(`${this.url}/conversas/adicionar/${nome}`);

        return new Chat(nome);
    }

    async pegarChats(): Promise<Chat[]> {
        const response: AxiosResponse<Chat[]> = await axios.get(`${this.url}/conversas`);
        const conversas = response.data;

        return conversas.map(c => new Chat(c.nome, c.mensagens));
    }

}