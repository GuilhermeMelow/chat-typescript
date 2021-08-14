import { Conversa } from "../src/models/conversa";
import { RepositoryConversa } from "../src/repositorys/repositoryConversa";

describe("repositoryConversa.ts", () => {

    function build() {
        const repository = new RepositoryConversa();

        adicionarConversas(repository);

        return { repository };
    }

    it("Ao mostrar as conversas do repositorio, deve haver alguma", async () => {
        // Arrange
        const { repository } = build();

        // Assert
        expect((await repository.mostrar()).length > 0).toBeTruthy();
    });

    it("Ao adicionar uma conversa no repositorio, deve ter exito", async () => {
        // Arrange
        const { repository } = build();
        const conversa = new Conversa("teste");

        // Act 
        await repository.adicionar(conversa);

        // Assert
        const conversas = await repository.mostrar();
        expect(conversas.some(c => c.nome == conversa.nome)).toBeTruthy();
    });

    it("Ao procurar por uma conversa presente no repositorio, deve traze-la", async () => {
        // Arrange
        const { repository } = build();
        const nomeConversa = new Conversa("teste")
        repository.adicionar(nomeConversa);

        // Act
        const conversa = await repository.procurar("teste");

        // Assert
        expect(conversa).not.toBeUndefined();
    });

});

function adicionarConversas(repository: RepositoryConversa) {
    for (var i = 0; i < 4; i++) {
        repository.adicionar(new Conversa(`conversa${i}`));
    }
}