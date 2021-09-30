import { Guid } from "../src/utils/guidGenerator";

describe("Validar Guid", () => {
    const guid = new Guid().toString();

    it("Tamanho guid", () => {
        // Arrange
        const guidSize = 35;

        // Assert
        expect(guid.length).toBe(guidSize);
    });

    it("Ao cortar o guid, devemos ter quatro partes", () => {
        //Assert
        expect(guid.split('-').length).toBe(5)
    });
})
