import { IChatService } from "@/types/IChatService";
import { Chat } from "@/types/Chat";

export class ChatService implements IChatService {
    private _chats: Chat[] = [];

    async adicionar(chat: Chat): Promise<number> {

        return new Promise<number>((resolve) => {
            resolve(this._chats.push(chat))
        });
    }

    async entrar(nome: string): Promise<Chat> {
        if (nome === "") throw new Error("Não é possível entrar com este nome.");

        const chat = new Chat(nome);
        await this.adicionar(chat);

        return new Promise<Chat>((resolve) => resolve(chat));
    }

    async pegarChats(): Promise<Chat[]> {
        const copyChats: Chat[] = this._chats.map(c => c);
        return new Promise<Chat[]>((resolve) => resolve(copyChats))
    }
}