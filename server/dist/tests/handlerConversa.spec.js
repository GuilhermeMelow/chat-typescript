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
const conversaHandler_1 = require("../src/handlers/conversaHandler");
const ErrorHandler_1 = require("../src/utils/ErrorHandler");
describe("ConversaHandler.ts", () => {
    function build() {
        const mockRepositorio = {
            mostrar: jest.fn(),
            procurar: jest.fn(),
            adicionar: jest.fn(),
            adicionarMensagem: jest.fn()
        };
        return { handler: new conversaHandler_1.ConversaHandler(mockRepositorio) };
    }
    ;
    describe("Error handling", () => {
        it("Ao tentar adicionar um nome vazio, deve lançar uma exceção ErrorHandler", () => __awaiter(void 0, void 0, void 0, function* () {
            // Assert
            expect.assertions(1);
            // Arrange
            const { handler } = build();
            // Act
            yield expect(handler.postConversa("")).rejects.toThrowError(ErrorHandler_1.ErrorHandler);
        }));
        it("Ao tentar adicionar uma mensagem sem texto, deve lançar uma exceção ErrorHandler", () => __awaiter(void 0, void 0, void 0, function* () {
            // Assert
            expect.assertions(1);
            // Arrange
            const { handler } = build();
            const conversaRequest = {
                nome: "teste",
                mensagem: ""
            };
            // Act
            yield expect(handler.AdicionarMensagem(conversaRequest)).rejects.toThrowError(ErrorHandler_1.ErrorHandler);
        }));
    });
});
//# sourceMappingURL=handlerConversa.spec.js.map