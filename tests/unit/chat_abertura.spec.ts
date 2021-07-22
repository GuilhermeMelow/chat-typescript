import { chat } from "./ChatSetup";

function build() {
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
    expect(chat.isAberto()).toBe(false);
})