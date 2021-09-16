import { ConversaHandler } from '../src/handlers/conversaHandler';
import { IRepositoryConversa } from '../src/repositorys/repositoryConversa';
import { ErrorHandler } from '../src/utils/ErrorHandler';

describe('ConversaHandler.ts', () => {
    const build = () => {
        const mockRepositorio: IRepositoryConversa = {
            mostrar: jest.fn(),
            procurar: jest.fn(),
            adicionar: jest.fn(),
            adicionarMensagem: jest.fn(),
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
                nome: 'teste',
                mensagem: '',
            };

            // Act
            await expect(handler.adicionarMensagem(conversaRequest)).rejects.toThrowError(ErrorHandler);
        });
    });
});
