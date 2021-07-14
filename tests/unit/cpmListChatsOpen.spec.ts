import { shallowMount } from "@vue/test-utils";
import Conversations from "@/components/chat/ListChatsOpen.vue";

describe("Conversation.vue", () => {
    function build() {
        const chatsOpen = [{ id: "01", nome: "teste" }];
        const wrapper = shallowMount(Conversations, {
            props: {
                chatsOpen: chatsOpen
            }
        })

        return { chatsOpen, wrapper }
    }

    it("ao receber as conversas deve renderizar", () => {
        // Arrange
        const { wrapper, chatsOpen } = build();

        // Act
        const component = wrapper.get("[data-teste='" + chatsOpen[0].id + "']");

        // Assert
        expect(component.text()).toEqual(chatsOpen[0].nome);
    })
});