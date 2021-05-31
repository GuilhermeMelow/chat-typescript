import { IChatService, IChat } from "@/types/IChatService";

export class ChatService implements IChatService {
    adicionar(chat: IChat): Promise<number> {
        throw new Error("Method not implemented.");
    }
    entrar(nome: string): Promise<IChat> {
        throw new Error("Method not implemented.");
    }
    pegarChats(): Promise<IChat[]> {
        throw new Error("Method not implemented.");
    }
}