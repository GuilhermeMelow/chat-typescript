import { Inject, Service } from "typedi";
import { User } from "../models/user";
import { UsuarioRepository } from "../repositorys/usuarioRepository";

@Service()
export class UsuarioHandler {
    constructor(@Inject('repository.usuario') private readonly repository: UsuarioRepository) { }

    public async create(): Promise<string> {
        const user = new User();

        await this.repository.adicionar(user);

        return user.id.toString();
    }
}
