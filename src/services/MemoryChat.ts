import { IChatService, IChat } from "@/types/IChatService";

export class InMemoryChat implements IChatService {
    private _chats: IChat[] = [];

    async adicionar(chat: IChat): Promise<number> {

        return new Promise<number>((resolve) => {
            resolve(this._chats.push(chat))
        });
    }

    async entrar(nome: string): Promise<IChat> {
        if (nome === "") throw new Error("Não é possível entrar com este nome.");

        const chat: IChat = { id: "sadf", nome: nome, aberto: false };
        await this.adicionar(chat);

        return new Promise<IChat>((resolve) => resolve(chat));
    }

    async pegarChats(): Promise<IChat[]> {
        const copyChats: IChat[] = this._chats.map(c => ({ ...c }));
        return new Promise<IChat[]>((resolve) => resolve(copyChats))
    }
}