import { shallowMount } from "@vue/test-utils"
import Enviador from "@/components/Enviador.vue";

describe("CriaChat.vue", () => {
    function build() {
        return {
            wrapper: shallowMount(Enviador),
        }
    }

    it("ao enviar uma informação, a mesma deve ser enviada com sucesso", async () => {
        // Arrange
        const { wrapper } = build();

        // Act
        wrapper.vm.$emit('sendInformation', "sucesso");
        await wrapper.vm.$nextTick();

        // Assert
        expect(wrapper.emitted().sendInformation).toBeTruthy();
    })
})