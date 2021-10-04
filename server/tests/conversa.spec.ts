import { Conversa } from '../src/models/conversa';
import { Mensagem } from '../src/models/mensagem';
import { Guid } from '../src/utils/guidGenerator';

test('Ao enviar uma mensagem, a mesma deve estar na lista de mensagens', () => {
    // Arrange
    const mensagem: Mensagem = { sender: new Guid(), value: 'teste' };
    const conversa = new Conversa('test');

    // Act
    conversa.adicionarMensagem(mensagem);

    // Assert
    expect(conversa.mensagens.includes(mensagem)).toBeTruthy();
});
