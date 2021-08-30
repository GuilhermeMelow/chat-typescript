"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const conversa_1 = require("../src/models/conversa");
const repositoryConversa_1 = require("../src/repositorys/repositoryConversa");
describe("repositoryConversa.ts", () => {
    function build() {
        const repository = new repositoryConversa_1.RepositoryConversa();
        const getConversa = () => {
            const conversa = new conversa_1.Conversa("teste1");
            repository.adicionar(conversa);
            return conversa;
        };
        return { repository, getConversa };
    }
    it("Ao adicionar uma conversa no repositorio, deve mostrar a mesma com exito", () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const { repository } = build();
        const conversa = new conversa_1.Conversa("teste");
        // Act 
        yield repository.adicionar(conversa);
        // Assert
        const conversas = yield repository.mostrar();
        expect(conversas.some(c => c.nome == conversa.nome)).toBeTruthy();
    }));
    it("Ao procurar uma conversa no repositorio, o repositorio deve traze-la", () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const { repository, getConversa } = build();
        const conversa = getConversa();
        // Act
        const conversaRecuperada = yield repository.procurar(conversa.nome);
        // Assert
        expect(conversaRecuperada).not.toBeUndefined();
    }));
    it("Ao adicionar uma mensagem em uma conversa, deve ocorrer com exito", () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange 
        const { repository, getConversa } = build();
        const conversa = getConversa();
        const mensagem = "teste";
        // Act 
        yield repository.adicionarMensagem(conversa.nome, mensagem);
        // Assert
        const conversaAtualizada = yield repository.procurar(conversa.nome);
        expect(conversaAtualizada.mensagens.some(m => m === mensagem)).toBeTruthy();
    }));
    describe("Error", () => {
        it("Ao procurar por uma conversa inexistente, deve lançar uma exceção", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const { repository } = build();
            // Act
            const action = () => __awaiter(void 0, void 0, void 0, function* () { return yield repository.procurar("inexistente"); });
            // Act
            yield expect(action).rejects.toThrow(Error);
        }));
    });
});
//# sourceMappingURL=repositoryConversa.spec.js.map