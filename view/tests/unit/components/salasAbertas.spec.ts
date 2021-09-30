import { shallowMount } from "@vue/test-utils"
import SalasAbertas from "@/views/chat/components/SalasAbertas.vue";
import { Chat } from "@/store/models/chat/Chat";

const salas = [
    new Chat('Sala-1'),
    new Chat('Sala-2'),
    new Chat('Sala-3'),
]

describe("SalasAbertas.vue", () => {
    const build = (chat?: Chat) => {
        return {
            wrapper: shallowMount(SalasAbertas, {
                props: {
                    chat,
                    salas,
                },
            }),
        }
    }

    it("Renderizar uma tab para cada sala aberta", async () => {
        // Arrange
        const { wrapper } = build();
        const tab = wrapper.find('.tab-nav');

        // Assert
        expect(tab.element.children).toHaveLength(salas.length);
    });

    it("Destacar a tab da sala ativa", async () => {
        // Arrange
        const IndiceAtivo = 1;
        const salaAtiva = salas[IndiceAtivo];
        const { wrapper } = build(salaAtiva);
        const tabs = wrapper.findAll('.tab-nav div');

        // Assert
        expect(tabs[IndiceAtivo].classes()).toContain('tab_selected');
    });
})
