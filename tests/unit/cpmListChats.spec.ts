import { shallowMount } from "@vue/test-utils"
import ListChats from "@/components/chat/ListChats.vue"
import { IChat } from "@/types/IChatService";

describe('ListChats.vue', () => {
    function build() {
        const listChat: IChat[] = [
            { id: "1", nome: "teste1" },
            { id: "2", nome: "teste2" }
        ];
        const wrapper = shallowMount(ListChats, {
            props: {
                chats: listChat
            }
        });
        return { wrapper, listChat };
    }

    it("ao receber chats, criar componentes para os mesmos", () => {
        // Arrange
        const { wrapper, listChat } = build();

        // Act
        const chatComponent = wrapper.get("[data-teste='" + listChat[0].id + "']");

        // Assert
        expect(chatComponent.text()).toEqual(listChat[0].id);
    })
});