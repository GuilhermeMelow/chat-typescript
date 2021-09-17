import { shallowMount } from "@vue/test-utils"
import Enviador from "@/components/Enviador.vue";

describe("CriaChat.vue", () => {
    it("Ao enviar uma informação, a mesma deve ser enviada com sucesso", async () => {
        // Arrange
        const wrapper = shallowMount(Enviador);
        const mensagem = "teste";
        wrapper.get("[data-teste='nome']").setValue(mensagem);

        // Act
        await wrapper.get("[data-teste='criar']").trigger("click");

        // Assert
        const dadosEmitido = wrapper.emitted<string>().send[0];
        expect(dadosEmitido[0] === mensagem).toBeTruthy();
    })
})
