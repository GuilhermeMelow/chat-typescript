import { Chat } from "@/store/models/chat/Chat";
import { useChats } from "@/views/chat/functions/UseChats"


const salas = (): Chat[] => {
    const criarSala = (i: number) => new Chat(`sala${i}`)
    const result = [0, 4].map(criarSala)

    result[0].abrir()

    return result;
}

const getMockStore = () => {
    return {
        abrirSala: jest.fn(),
        criarSala: jest.fn(),
        enviar: jest.fn(),
        fecharSala: jest.fn(),
        inicializarSalas: jest.fn(),
        state: {
            chat: new Chat("teste"),
            salas: salas(),
        },
    };
}

describe("UseChats function", () => {
    it("Ao solicitar pelas salas abertas, não deve trazer as fechadas", async () => {
        // Arrange
        const chats = useChats(getMockStore());

        const todasEstaoAbertas = chats.salasAbertas.value.every((sala) => sala.aberto);

        // Act && Assert
        expect(todasEstaoAbertas).toBeTruthy();
    })
});
