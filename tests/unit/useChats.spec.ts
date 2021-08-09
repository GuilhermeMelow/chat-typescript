import { Chat } from "@/types/Chat";
import { UseChats } from "@/views/chat/functions/UseChats"

describe("UseChats function", () => {
    it("Ao solicitar pelas salas abertas, não deve trazer as fechadas", async () => {
        // Arrange
        const { store } = build();
        const useChats = UseChats(store);

        const salasFechadas = useChats.salasAbertas.value.find(sala => !sala.isAberto());

        // Act && Assert
        expect(!salasFechadas).toBeTruthy();
    })
});

function build() {
    const mockStore = {
        state: {
            chat: new Chat("teste", "123"),
            salas: salas()
        },
        criarSala: jest.fn(),
        abrirSala: jest.fn(),
        inicializarSalas: jest.fn(),
        enviarMensagem: jest.fn(),
    };

    return { store: mockStore, salas: salas() };
}

function salas() {
    return [
        new Chat("123", "testeAberto1", true),
        new Chat("124", "testeFechado1", false),
        new Chat("125", "testeAberto2", true),
        new Chat("126", "testeFechado2", false),
    ];
}