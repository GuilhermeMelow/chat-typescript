import { chat } from "./ChatSetup";

function build() {
    return { chat, mensagem: "teste" };
}

describe("chat", () =>  { 
    
    it("Ao enviar uma mensagem, a mesma deve estar na lista de mensagens", () => {
        // Arrange 
        const { chat, mensagem } = build();

        // Act
        chat.enviarMensagem(mensagem);
        const resultMessage = chat.mensagens.find(p => p == mensagem);

        // Assert
        const hasMessage = resultMessage != undefined;
        expect(hasMessage).toBeTruthy();
    });

    it("Ao abrir o chat, o mesmo deve constar como aberto", () => {
        // Arrange
        const { chat } = build();
    
        // Act
        chat.abrir();
    
        // Assert
        expect(chat.isAberto()).toBe(true);
    });
    
    it("Ao fechar o chat, o mesmo deve constar como fechado", () => {
        // Arrange
        const { chat } = build();
    
        // Act
        chat.fechar();
    
        // Assert
        expect(chat.isAberto()).toBe(false);
    });
});