import { shallowMount } from "@vue/test-utils"
import Enviador from "@/components/Enviador.vue";

describe("CriaChat.vue", () => {
    function build() {
        return {
            wrapper: shallowMount(Enviador),
        }
    }

    it("Ao enviar uma informação, a mesma deve ser enviada com sucesso", async () => {
        // Arrange
        const { wrapper } = build();
        const mensagem = "teste";

        // Act
        wrapper.get("[data-teste='nome']").setValue(mensagem);
        wrapper.get("[data-teste='criar']").trigger("click");

        const dadoEmitido = wrapper.emitted().send[0];

        // Assert
        expect(dadoEmitido == mensagem).toBeTruthy();
    })
})