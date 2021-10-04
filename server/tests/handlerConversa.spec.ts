import { ConversaHandler } from '../src/handlers/conversaHandler';
import { IRepositoryConversa } from '../src/repositorys/repositoryConversa';
import { ErrorHandler } from '../src/utils/ErrorHandler';
import { Guid } from '../src/utils/guidGenerator';

describe('ConversaHandler.ts', () => {
    const build = () => {
        const mockRepositorio: IRepositoryConversa = {
            adicionar: jest.fn(),
            adicionarMensagem: jest.fn(),
            mostrar: jest.fn(),
            procurar: jest.fn(),
        };

        return { handler: new ConversaHandler(mockRepositorio) };
    };

    describe('Error handling', () => {
        it('Ao tentar adicionar um nome vazio, deve lançar uma exceção ErrorHandler', async () => {
            // Assert
            expect.assertions(1);

            // Arrange
            const { handler } = build();

            // Act
            await expect(handler.postConversa('')).rejects.toThrowError(ErrorHandler);
        });

        it('Ao tentar adicionar uma mensagem sem texto, deve lançar uma exceção ErrorHandler', async () => {
            // Assert
            expect.assertions(1);

            // Arrange
            const { handler } = build();
            const conversaRequest = {
                mensagem: { sender: new Guid(), value: "" },
                nome: 'teste',

            };

            // Act
            await expect(handler.adicionarMensagem(conversaRequest)).rejects.toThrowError(ErrorHandler);
        });
    });
});
