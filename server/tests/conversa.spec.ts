import { Conversa } from "../src/models/conversa"

test("Ao enviar uma mensagem, a mesma deve estar na lista de mensagens", () => {
    // Arrange
    const mensagem = "testando...";
    const conversa = new Conversa("test");

    // Act
    conversa.adicionarMensagem(mensagem);

    // Assert
    expect(conversa.mensagens.includes(mensagem)).toBeTruthy();
});
