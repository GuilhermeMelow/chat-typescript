import { Conversa } from "../src/model/conversa"

test("Ao enviar uma mensagem, a mesma deve estar na lista de mensagens", () => {
    // Arrange
    const mensagem = "testando...";
    const conversa = new Conversa("test");

    // Act
    conversa.enviar(mensagem);

    // Assert
    expect(conversa.mensagens.includes(mensagem)).toBeTruthy();
});