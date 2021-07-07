import { shallowMount } from "@vue/test-utils"
import CriarChat from "@/components/chat/CriarChat.vue";
import { IState } from "@/store";
import { ref } from "@vue/runtime-dom";

describe("CriaChat.vue", () => {
    function build() {
        const state: IState = { chats: ref([]) }
        const store = { state, adicionar: jest.fn() }
        store.adicionar.mockReturnValue("success")

        const wrapper = shallowMount(CriarChat, {
            global: {
                provide: {
                    'store': store
                }
            }
        })
        return {
            wrapper,
            componentes: {
                textbox: wrapper.get("[data-teste='nome']"),
                button: wrapper.get("[data-teste='criar']"),
            },
            store
        }
    }

    it("ao clicar no botão de criar chat, deve executar o mesmo.", () => {
        // Arrange
        const { componentes, store } = build();
        componentes.textbox.setValue("Teste Chat");

        // Act
        componentes.button.trigger("click");

        // Assert
        expect(store.adicionar).toHaveBeenCalledTimes(1);
    })
})