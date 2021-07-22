import { chat } from "./ChatSetup";

function build() {
    return { chat, mensagem: "teste" };
}

test("Ao chamar adicionar, a mesma deve estar na lista de mensagens", () => {
    // Arrange 
    const { chat, mensagem } = build();

    // Act
    chat.adicionarMensagem(mensagem);
    const mensagens = chat.getMensagens();
    const resultMessage = mensagens.find(p => p == mensagem);

    // Assert
    const hasMessage = resultMessage != undefined;
    expect(hasMessage).toBeTruthy();
})