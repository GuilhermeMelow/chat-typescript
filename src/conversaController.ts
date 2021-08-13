import { Application } from 'express';
import { Inject, Service } from 'typedi';
import { ConversaHandler } from './conversaHandler';

@Service()
export class ConversaController {
    private readonly app: Application;
    private readonly handler: ConversaHandler;

    constructor(@Inject("handler.conversa") handler: ConversaHandler, @Inject("app") app: Application) {
        this.handler = handler;
        this.app = app;

        this.createController();
    }

    private createController() {
        this.app.get("/conversas", async (req, res) => {
            try {
                const conversas = await this.handler.GetConversas();

                res.status(200).send(conversas);
            } catch (error) {
                res.status(404).send(error);
            }
        });

        this.app.post("/conversas/adicionar/:nome", async (req, res) => {
            try {
                const nome = req.params.nome;

                await this.handler.postConversa(nome);

                res.status(200).send("Adicionada!");
            } catch (error) {
                res.status(404).send(error);
            }
        });

        this.app.get("/conversas/:nome", async (req, res) => {
            try {
                const nome = req.params.nome;

                res.status(200).send(await this.handler.FindConversas(nome));
            } catch (error) {
                res.status(404).send(error);
            }
        })
    }

}