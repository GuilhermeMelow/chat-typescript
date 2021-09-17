import { Conversa } from '../src/models/conversa';
import { RepositoryConversa } from '../src/repositorys/repositoryConversa';



describe('repositoryConversa.ts', () => {
    const build = () => {
        const repository = new RepositoryConversa();
        const getConversa = () => {
            const conversa = new Conversa('teste1');
            repository.adicionar(conversa);

            return conversa;
        };

        return { getConversa, repository };
    };

    it('Ao adicionar uma conversa no repositorio, deve mostrar a mesma com exito', async () => {
        // Arrange
        const { repository } = build();
        const conversa = new Conversa('teste');

        // Act
        await repository.adicionar(conversa);

        // Assert
        const conversas = await repository.mostrar();
        expect(conversas.some((c) => c.nome === conversa.nome)).toBeTruthy();
    });

    it('Ao procurar uma conversa no repositorio, o repositorio deve traze-la', async () => {
        // Arrange
        const { repository, getConversa } = build();
        const conversa = getConversa();

        // Act
        const conversaRecuperada = await repository.procurar(conversa.nome);

        // Assert
        expect(conversaRecuperada).not.toBeUndefined();
    });

    it('Ao adicionar uma mensagem em uma conversa, deve ocorrer com exito', async () => {
        // Arrange
        const { repository, getConversa } = build();
        const conversa = getConversa();
        const mensagem = 'teste';

        // Act
        await repository.adicionarMensagem(conversa.nome, mensagem);

        // Assert
        const conversaAtualizada = await repository.procurar(conversa.nome);
        expect(conversaAtualizada.mensagens.some((m) => m === mensagem)).toBeTruthy();
    });

    describe('Error', () => {
        it('Ao procurar por uma conversa inexistente, deve lançar uma exceção', async () => {
            // Arrange
            const { repository } = build();

            // Act
            const action = async () => repository.procurar('inexistente');

            // Act
            await expect(action).rejects.toThrow(Error);
        });
    });
});
