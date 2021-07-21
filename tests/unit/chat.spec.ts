import { Chat } from "@/types/Chat";

function build() {
    const chat = new Chat("132", "teste");
    return { chat }
}

test("Ao abrir o chat, o mesmo deve constar como aberto", () => {
    // Arrange
    const { chat } = build();

    // Act
    chat.abrir();

    // Assert
    expect(chat.isAberto()).toBe(true);
})

test("Ao fechar o chat, o mesmo deve constar como fechado", () => {
    // Arrange
    const { chat } = build();

    // Act
    chat.fechar();

    // Assert
    expect(!chat.isAberto()).toBe(true);
})