import { Chat } from "@/types/Chat";

describe("chat classe", () => {
    const build = () => {
        return {
            chat: new Chat("teste1"),
            mensagem: "teste",
        };
    }

    it("Ao enviar uma mensagem, a mesma deve estar na lista de mensagens", () => {
        // Arrange
        const { chat, mensagem } = build();

        // Act
        chat.enviar(mensagem);
        const resultMessage = chat.mensagens.find((p) => p === mensagem);

        // Assert
        expect(resultMessage).not.toBeUndefined();
    });

    it("Ao abrir o chat, o mesmo deve constar como aberto", () => {
        // Arrange
        const { chat } = build();

        // Act
        chat.abrir();

        // Assert
        expect(chat.aberto).toBe(true);
    });

    it("Ao fechar o chat, o mesmo deve constar como fechado", () => {
        // Arrange
        const { chat } = build();

        // Act
        chat.fechar();

        // Assert
        expect(chat.aberto).toBe(false);
    });
});
