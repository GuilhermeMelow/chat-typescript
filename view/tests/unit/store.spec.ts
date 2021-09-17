import { createStore } from "@/store"
import { Chat } from "@/types/Chat";


const getMockEvent = () => {
    return {
        createListener: jest.fn(),
        send: jest.fn(),
    };
}

const getMockService = (salas: Chat[]) => {
    return {
        adicionar: jest.fn(),
        entrar: jest.fn(),
        enviar: jest.fn(),
        pegarChats: jest.fn().mockReturnValue(salas),
    };
}

describe('Store class', () => {
    const build = () => {
        const salas = [new Chat("teste1"), new Chat("teste2"), new Chat("teste3")];
        const mockService = getMockService(salas);
        const mockEvent = getMockEvent();

        return {
            sala: new Chat("teste"),
            salas,
            store: createStore(mockService, mockEvent),
        };
    }

    it("Ao tentar inicializar as salas, deve ocorrer com exito", async () => {
        // Arrange
        const { store, salas } = build();

        // Act
        await store.inicializarSalas();

        // Assert
        expect(store.state.salas).toEqual(salas);
    });


    it("Ao criar uma sala, deve conte-la na lista de salas", async () => {
        // Arrange
        const { store, sala } = build();

        // Act
        await store.criarSala(sala.nome);

        // Assert
        expect(store.state.salas.some((s) => s.nome === sala.nome)).toBeTruthy();
    });


    it("Ao enviar uma mensagem, deve registrar na sala ativa", async () => {
        // Arrange
        const { store, sala } = build();
        const mensagem = "Teste123";
        await store.criarSala(sala.nome);

        // Act
        await store.enviar(mensagem);

        // Assert
        expect(store.state.chat?.mensagens[0]).toBe(mensagem);
    });

    it("Ao fechar uma sala que está ativa e haja outra aberta, deve redirecionar para a que esta aberta", async () => {
        // Arrange
        const { store, salas } = build();
        await store.inicializarSalas();
        store.abrirSala(salas[1]);
        store.abrirSala(salas[0]);

        // Act
        store.fecharSala(salas[0]);

        // Assert
        expect(store.state.chat?.nome).toBe(salas[1].nome);
    });

});
