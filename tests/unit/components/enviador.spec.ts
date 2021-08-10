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

        // Act
        wrapper.get("[data-teste='nome']").setValue("teste");
        wrapper.get("[data-teste='criar']").trigger("click");

        // Assert
        expect(wrapper.emitted().send).toBeTruthy();
    })
})