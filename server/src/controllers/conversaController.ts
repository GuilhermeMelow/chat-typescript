import { Application, NextFunction, Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import { ConversaHandler } from '../handlers/conversaHandler';
import { Conversa } from '../models/conversa';
import { IConversaRequest } from '../models/IConversaRequest';

@Service()
export class ConversaController {
    private readonly app: Application;
    private readonly handler: ConversaHandler;

    constructor(@Inject("app") app: Application, handler: ConversaHandler,) {
        this.handler = handler;
        this.app = app;

        this.app.get("/conversas", async (req, res) => await this.Get(res));

        this.app.get("/conversas/:nome", async (req, res, next) => this.Find(req, res, next));

        this.app.post("/conversas/adicionar/:nome", async (req, res, next) => this.Add(req, res, next));

        this.app.post("/conversas/mensagens/adicionar", async (req, res, next) => this.AddMensagem(req, res, next));
    }

    private async Get(response: Response) {
        const conversas: Conversa[] = await this.handler.GetConversas();

        response.status(200).send(conversas);
    }

    private async Add(request: Request, response: Response, next: NextFunction) {
        try {
            const nome: string = request.params.nome;

            response.status(200).send(await this.handler.postConversa(nome));
        } catch (error) {
            next(error);
        }
    }

    private async Find(request: Request, response: Response, next: NextFunction) {
        try {
            const nome: string = request.params.nome;

            response.status(200).send(await this.handler.FindConversa(nome));
        } catch (error) {
            next(error);
        }
    }

    private async AddMensagem(request: Request, response: Response, next: NextFunction) {
        try {
            const conversaRequest: IConversaRequest = request.body;

            response.status(200).send(await this.handler.AdicionarMensagem(conversaRequest));
        } catch (error) {
            next(error);
        }
    }
}