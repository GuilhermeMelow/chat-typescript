import { shallowMount } from "@vue/test-utils"
import ListChats from "@/components/chat/ListChats.vue"
import { IChat } from "@/types/IChatService";

describe('ListChats.vue', () => {
    function build() {
        const chats: IChat[] = [
            { id: "1", nome: "teste1" },
            { id: "2", nome: "teste2" }
        ];
        const wrapper = shallowMount(ListChats, {
            props: {
                chats: chats
            }
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
    })
});