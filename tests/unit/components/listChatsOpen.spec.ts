import { shallowMount } from "@vue/test-utils";
import { chats } from "../ChatSetup";
import Conversations from "@/components/chat/ListChatsOpen.vue";

describe("Conversation.vue", () => {
    function build() {
        const wrapper = shallowMount(Conversations, {
            props: {
                chatsOpen: chats
            }
        })

        return { chatsOpen: chats, wrapper }
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