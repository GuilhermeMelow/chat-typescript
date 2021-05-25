import { IChatService, IUser } from "@/types/IChatService";

export class InMemoryChat implements IChatService {
    entrar(username: string): IUser {
        return {
            id: 'sadf',
            nome: username
        }
    }

    private _users: IUser[] = [];

    adicionar(usuario: IUser): void {
        this._users.push(usuario);
    }
}