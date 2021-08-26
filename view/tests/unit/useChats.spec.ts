import { Sala } from "@/types/Sala";
import { IStore } from "@/types/IStore";
import { UseSalas } from "@/views/chat/functions/UseSalas"

describe("UseSalas function", () => {
    it("Ao solicitar pelas salas abertas, não deve trazer as fechadas", async () => {
        // Arrange
        const { store } = build();
        const useSalas = UseSalas(store);

        const todasEstaoAbertas = useSalas.salasAbertas.value.every(sala => sala.aberto);

        // Act && Assert
        expect(todasEstaoAbertas).toBeTruthy();
    })
});

function build() {
    const mockStore: IStore = {
        state: {
            sala: new Sala("teste"),
            salas: salas()
        },
        criarSala: jest.fn(),
        abrirSala: jest.fn(),
        inicializarSalas: jest.fn(),
        enviar: jest.fn(),
    };

    return { store: mockStore, salas: salas() };
}

function salas() {
    const criarSala = (i: Number) => new Sala(`sala${i}`)
    const salas = [0, 4].map(criarSala)

    salas[0].abrir()

    return salas;
}