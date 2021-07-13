import { shallowMount } from "@vue/test-utils"
import ListChats from "@/components/chat/ListChats.vue"
import { IChat } from "@/types/IChatService";
import { IState } from "@/store";
import { ref } from "vue";

describe('ListChats.vue', () => {
    function build() {
        const state: IState = { chats: ref([]) }
        const store = { state, abrirConversa: jest.fn() }

        var chats: IChat[] = [
            { id: "1", nome: "teste1", aberto: false },
            { id: "2", nome: "teste2", aberto: false }
        ];

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