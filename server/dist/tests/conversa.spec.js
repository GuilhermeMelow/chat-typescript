"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conversa_1 = require("../src/models/conversa");
test("Ao enviar uma mensagem, a mesma deve estar na lista de mensagens", () => {
    // Arrange
    const mensagem = "testando...";
    const conversa = new conversa_1.Conversa("test");
    // Act
    conversa.adicionarMensagem(mensagem);
    // Assert
    expect(conversa.mensagens.includes(mensagem)).toBeTruthy();
});
//# sourceMappingURL=conversa.spec.js.map