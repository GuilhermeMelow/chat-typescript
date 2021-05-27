import { IChatService, IUser } from "@/types/IChatService";

export class InMemoryChat implements IChatService {
    private _users: IUser[] = [];

    entrar(username: string): IUser {
        return {
            id: 'sadf',
            nome: username
        }
    }

    adicionar(usuario: IUser): void {
        this._users.push(usuario);
    }
}