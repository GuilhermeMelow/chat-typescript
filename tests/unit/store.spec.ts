import { Store } from "@/store"
import { chats, chat } from "./ChatSetup"

function build() {
    const service = {
        pegarChats: jest.fn(),
        adicionar: jest.fn(),
        entrar: jest.fn()
    };
    const store = new Store(service);

    service.pegarChats.mockReturnValue(chats);

    return { store, chat, chats };
}

test("Ao adicionar um chat deve conte-lo na lista de chats.", () => {
    // Arrange
    const { store, chat } = build();

    // Act
    store.adicionar(chat);

    // Assert
    expect(store.state.chats.value[0].id).toBe(chat.id);
});

test("Ao inicializar a lista de chats deve conter os chats", async () => {
    // Arrange
    const { store, chats } = build();

    // Act
    await store.inicializar();

    // Assert
    expect(store.state.chats.value).toEqual(chats);
});

test("Ao enviar uma mensagem, deve registrar no conversa ativa", () => {
    // Arrange
    const { store, chat } = build();
    const mensagem = "Teste123";
    store.adicionar(chat);

    // Act
    store.enviarMensagem(mensagem);

    // Assert
    expect(store.state.chat.value?.mensagens[0]).toBe(mensagem);
})