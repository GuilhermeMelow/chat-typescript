import { CreateStore } from "@/store"
import { chats, chat } from "./ChatSetup"

function build() {
    const service = {
        pegarChats: jest.fn(),
        adicionar: jest.fn(),
        entrar: jest.fn()
    };
    const store = CreateStore(service);

    service.pegarChats.mockReturnValue(chats);

    return { service, store, chat, chats };
}

describe('Store class', () => {
    it("Ao tentar carregar as conversas, deve ocorrer com exito", async () => {
        // Arrange 
        const { store, chats } = build();

        // Act
        await store.carregarConversas();

        // Assert
        expect(store.state.chats).toEqual(chats);
    });


    it("Ao adicionar um chat deve conte-lo na lista de chats", () => {
        // Arrange
        const { store, chat } = build();

        // Act
        store.adicionar(chat.nome);

        // Assert
        expect(store.state.chats[0].nome).toBe(chat.nome);
    });


    it("Ao enviar uma mensagem, deve registrar no conversa ativa", () => {
        // Arrange
        const { store, chat } = build();
        const mensagem = "Teste123";
        store.adicionar(chat.nome);

        // Act
        store.enviarMensagem(mensagem);

        // Assert
        expect(store.state.chat?.mensagens[0]).toBe(mensagem);
    });
});