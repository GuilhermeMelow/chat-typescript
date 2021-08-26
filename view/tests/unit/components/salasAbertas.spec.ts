import { shallowMount } from "@vue/test-utils"
import SalasAbertas from "@/views/chat/components/SalasAbertas.vue";
import { Sala } from "@/types/Sala";

const salas = [
    new Sala('Sala-1'),
    new Sala('Sala-2'),
    new Sala('Sala-3')
]

describe("SalasAbertas.vue", () => {
    function build(sala?: Sala) {
        return {
            wrapper: shallowMount(SalasAbertas, {
                props: {
                    salas,
                    sala
                }
            })
        }
    }

    it("Renderizar uma tab para cada sala aberta", async () => {
        // Arrange
        const { wrapper } = build();
        const tab = wrapper.find('.tab-nav');

        // Assert
        expect(tab.element.children).toHaveLength(salas.length);
    })

    it("Destacar a tab da sala ativa", async () => {
        // Arrange
        const activeIndex = 1;
        const salaAtiva = salas[activeIndex];
        const { wrapper } = build(salaAtiva);
        const tabs = wrapper.findAll('.tab-nav li');

        // Assert
        expect(tabs[activeIndex].classes()).toContain('tab_selected');
    })
})