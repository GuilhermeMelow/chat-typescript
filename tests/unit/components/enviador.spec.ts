import { shallowMount } from "@vue/test-utils"
import Enviador from "@/components/Enviador.vue";


describe("CriaChat.vue", () => {
    function build() {
        const wrapper = shallowMount(Enviador);
        return {
            wrapper,
        }
    }

    it("ao enviar uma informação, a mesma deve ser enviada com sucesso", async () => {
        // Arrange
        const { wrapper } = build();
        wrapper.vm.$emit('sendInformation', "sucesso");

        // Act
        await wrapper.vm.$nextTick();

        // Assert
        expect(wrapper.emitted().sendInformation).toBeTruthy();
    })
})