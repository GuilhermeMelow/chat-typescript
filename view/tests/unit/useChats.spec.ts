import { Chat } from "@/types/Chat";
import { IStore } from "@/types/IStore";
import { UseChats } from "@/views/chat/functions/UseChats"

describe("UseChats function", () => {
    it("Ao solicitar pelas salas abertas, não deve trazer as fechadas", async () => {
        // Arrange
        const { store } = build();
        const useChats = UseChats(store);

        const todasEstaoAbertas = useChats.salasAbertas.value.every(sala => sala.aberto);

        // Act && Assert
        expect(todasEstaoAbertas).toBeTruthy();
    })
});

function build() {
    const mockStore: IStore = {
        state: {
            chat: new Chat("teste"),
            salas: salas()
        },
        criarSala: jest.fn(),
        abrirSala: jest.fn(),
        fecharSala: jest.fn(),
        inicializarSalas: jest.fn(),
        enviar: jest.fn(),
    };

    return { store: mockStore, salas: salas() };
}

function salas() {
    const criarSala = (i: Number) => new Chat(`sala${i}`)
    const salas = [0, 4].map(criarSala)

    salas[0].abrir()

    return salas;
}