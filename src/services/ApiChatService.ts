import { IChatService, IUser } from "@/types/IChatService";

export class ChatService implements IChatService {
    entrar(): IUser {
        throw new Error("Method not implemented.");
    }
    adicionar(usuario: IUser): void {
        alert(`Chamando API para ${usuario.id}`);
    }
}