import { Application } from "express";
import { Inject, Service } from "typedi";
import { UsuarioHandler } from "../handlers/usuarioHandler";


@Service()
export class UserController {
    constructor(@Inject('app') private readonly app: Application, private readonly handler: UsuarioHandler) {

        this.app.post('/usuario/criar', async (req, res) => res.send(await this.handler.create()));
    }
}
