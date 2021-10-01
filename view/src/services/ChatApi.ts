import { IChatApi } from "@/types/IChatApi";
import { Chat } from "@/store/models/chat/Chat";
import { IChatResponse } from "./ChatResponse";
import axios, { AxiosResponse } from "axios";
import { Message } from "@/types/Message";


export class ChatApi implements IChatApi {

    private readonly url: string = process.env.VUE_APP_API_ROOT;

    public async adicionar(chat: Chat): Promise<void> {
        if (chat.nome === "") {
            throw new Error("Não é possível entrar com este nome.");
        }

        await axios.post(`${this.url}/conversas/adicionar/${chat.nome}`);
    }

    public async enviar(mensagem: Message, chat: Chat): Promise<void> {
        await axios.post(`${this.url}/conversas/mensagens/adicionar`, {
            mensagem,
            nome: chat.nome,
        });
    }

    public async entrar(nome: string): Promise<Chat> {
        if (nome === "") {
            throw new Error("Não é possível entrar com este nome.");
        }

        await axios.post(`${this.url}/conversas/adicionar/${nome}`);

        return new Chat(nome);
    }

    public async pegarChats(): Promise<Chat[]> {
        const response: AxiosResponse<IChatResponse[]> = await axios.get(`${this.url}/conversas`);
        const conversas = response.data;

        return conversas.map((c) => new Chat(c.nome, c._mensagens));
    }
}
