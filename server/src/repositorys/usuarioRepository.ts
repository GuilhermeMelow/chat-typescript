import { User } from "../models/user";


export interface IUsuarioRepository {
    adicionar(user: User): Promise<void>
}

export class UsuarioRepository implements IUsuarioRepository {
    constructor(private readonly Users: User[] = []) { }

    public async adicionar(user: User): Promise<void> {
        this.Users.push(user);
    }
}
