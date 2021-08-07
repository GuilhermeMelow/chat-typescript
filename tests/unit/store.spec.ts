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
    it("Ao tentar inicializar as salas, deve ocorrer com exito", async () => {
        // Arrange 
        const { store, chats } = build();

        // Act
        await store.inicializarSalas();

        // Assert
        expect(store.state.salas).toEqual(chats);
    });


    it("Ao adicionar uma sala, deve conte-la na lista de salas", () => {
        // Arrange
        const { store, chat } = build();

        // Act
        store.criarSala(chat.nome);

        // Assert
        expect(store.state.salas[0].nome).toBe(chat.nome);
    });


    it("Ao enviar uma mensagem, deve registrar na sala ativa", () => {
        // Arrange
        const { store, chat } = build();
        const mensagem = "Teste123";
        store.criarSala(chat.nome);

        // Act
        store.enviarMensagem(mensagem);

        // Assert
        expect(store.state.chat?.mensagens[0]).toBe(mensagem);
    });
});