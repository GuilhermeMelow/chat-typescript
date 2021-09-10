import { Application, NextFunction, Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import { ConversaHandler } from '../handlers/conversaHandler';
import { Conversa } from '../models/conversa';
import { IConversaRequest } from '../models/IConversaRequest';

@Service()
export class ConversaController {

    constructor(@Inject("app") private readonly app: Application, private readonly handler: ConversaHandler,) {
        this.app.get("/conversas", async (req, res) => await this.get(res));

        this.app.get("/conversas/:nome", async (req, res, next) => this.find(req, res, next));

        this.app.post("/conversas/adicionar/:nome", async (req, res, next) => this.add(req, res, next));

        this.app.post("/conversas/mensagens/adicionar", async (req, res, next) => this.addMensagem(req, res, next));
    }

    private async get(response: Response): Promise<void> {
        const conversas: Conversa[] = await this.handler.getConversas();

        response.send(conversas);
    }

    private async add(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const nome: string = request.params.nome;

            response.send(await this.handler.postConversa(nome));
        } catch (error) {
            next(error);
        }
    }

    private async find(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const nome: string = request.params.nome;

            response.send(await this.handler.findConversa(nome));
        } catch (error) {
            next(error);
        }
    }

    private async addMensagem(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const conversaRequest: IConversaRequest = request.body;

            response.send(await this.handler.adicionarMensagem(conversaRequest));
        } catch (error) {
            next(error);
        }
    }
}
