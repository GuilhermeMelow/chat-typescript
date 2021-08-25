import { CreateStore } from "@/store"
import { Chat } from "@/types/Chat";

describe('Store class', () => {
    function build() {
        const salas = [new Chat("teste1"), new Chat("teste2"), new Chat("teste3")];

        const mockService = {
            pegarChats: jest.fn().mockReturnValue(salas),
            enviar: jest.fn(),
            adicionar: jest.fn(),
            entrar: jest.fn()
        };

        return {
            store: CreateStore(mockService),
            salas: salas,
            sala: new Chat("teste"),
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


    it("Ao criar uma sala, deve conte-la na lista de salas", () => {
        // Arrange
        const { store, sala } = build();

        // Act
        store.criarSala(sala.nome);

        // Assert
        expect(store.state.salas[0].nome).toBe(sala.nome);
    });


    it("Ao enviar uma mensagem, deve registrar na sala ativa", async () => {
        // Arrange
        const { store, sala } = build();
        const mensagem = "Teste123";
        store.criarSala(sala.nome);

        // Act
        await store.enviar(mensagem);

        // Assert
        expect(store.state.chat?.mensagens[0]).toBe(mensagem);
    });
});