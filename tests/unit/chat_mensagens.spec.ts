import { chat } from "./ChatSetup";

function build() {
    return { chat, mensagem: "teste" };
}

test("Ao enviar uma mensagem, a mesma deve estar na lista de mensagens", () => {
    // Arrange 
    const { chat, mensagem } = build();

    // Act
    chat.enviarMensagem(mensagem);
    const resultMessage = chat.mensagens.find(p => p == mensagem);

    // Assert
    const hasMessage = resultMessage != undefined;
    expect(hasMessage).toBeTruthy();
})