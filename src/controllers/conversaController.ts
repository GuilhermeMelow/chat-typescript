import { Application, NextFunction, Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import { ConversaHandler } from '../handlers/conversaHandler';
import { Conversa } from '../models/conversa';

@Service()
export class ConversaController {
    private readonly app: Application;
    private readonly handler: ConversaHandler;

    constructor(@Inject("handler.conversa") handler: ConversaHandler, @Inject("app") app: Application) {
        this.handler = handler;
        this.app = app;

        this.app.get("/conversas", async (req, res) => await this.Get(res));

        this.app.get("/conversas/:nome", async (req, res, next) => this.Find(req, res, next));

        this.app.post("/conversas/adicionar/:nome", async (req, res, next) => this.Add(req, res, next));
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

            response.status(200).send(await this.handler.FindConversas(nome));
        } catch (error) {
            next(error);
        }
    }
}