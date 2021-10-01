import { Chat } from "@/store/models/chat/Chat";
import { User } from "@/store/models/user/User";
import { useChats } from "@/views/chat/functions/UseChats"


const salas = (): Chat[] => {
    const criarSala = (i: number) => new Chat(`sala${i}`)
    const result = [0, 4].map(criarSala)

    result[0].abrir()

    return result;
}

const getMockChatStore = () => {
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

const getMockUserStore = () => {
    return {
        state: {
            user: new User("teste123")
        },
        createUser: jest.fn()
    }
}

describe("UseChats function", () => {
    it("Ao solicitar pelas salas abertas, não deve trazer as fechadas", async () => {
        // Arrange
        const chats = useChats(getMockChatStore(), getMockUserStore());

        const todasEstaoAbertas = chats.salasAbertas.value.every((sala) => sala.aberto);

        // Act && Assert
        expect(todasEstaoAbertas).toBeTruthy();
    })
});
