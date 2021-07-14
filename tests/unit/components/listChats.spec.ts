import { shallowMount } from "@vue/test-utils"
import { IState } from "@/store";
import { ref } from "vue";
import { chats } from "../ChatSetup";
import ListChats from "@/components/chat/ListChats.vue"

describe('ListChats.vue', () => {
    function build() {
        const state: IState = { chats: ref([]) }
        const store = { state, abrirConversa: jest.fn() }

        const wrapper = shallowMount(ListChats, {
            global: {
                provide: { 'store': store }
            },
            props: { chats: chats }
        });
        return { wrapper, chats };
    }

    it("ao receber chats, criar componentes para os mesmos", () => {
        // Arrange
        const { wrapper, chats } = build();

        // Act
        const chatComponent = wrapper.get("[data-teste='" + chats[0].id + "']");

        // Assert
        expect(chatComponent.text()).toEqual(chats[0].id);
    });
});