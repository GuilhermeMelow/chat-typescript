import { Sala } from "@/types/Sala";

describe("sala classe", () => {
    function build() {
        return {
            sala: new Sala("teste1"),
            mensagem: "teste"
        };
    }

    it("Ao enviar uma mensagem, a mesma deve estar na lista de mensagens", () => {
        // Arrange 
        const { sala, mensagem } = build();

        // Act
        sala.enviar(mensagem);
        const resultMessage = sala.mensagens.find(p => p == mensagem);

        // Assert
        const hasMessage = resultMessage != undefined;
        expect(hasMessage).toBeTruthy();
    });

    it("Ao abrir a sala, o mesmo deve constar como aberto", () => {
        // Arrange
        const { sala } = build();

        // Act
        sala.abrir();

        // Assert
        expect(sala.aberto).toBe(true);
    });

    it("Ao fechar a sala, o mesmo deve constar como fechado", () => {
        // Arrange
        const { sala } = build();

        // Act
        sala.fechar();

        // Assert
        expect(sala.aberto).toBe(false);
    });
});