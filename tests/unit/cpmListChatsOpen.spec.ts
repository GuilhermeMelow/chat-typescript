import { shallowMount } from "@vue/test-utils";
import Conversations from "@/components/chat/ListChatsOpen.vue";

describe("Conversation.vue", () => {
    function build() {
        const conversations = [{ id: "01", nome: "teste" }];
        const wrapper = shallowMount(Conversations, {
            props: {
                conversations: conversations
            }
        })

        return { conversations, wrapper }
    }

    it("ao receber as conversas deve renderizar", () => {
        // Arrange
        const { wrapper, conversations } = build();

        // Act
        const component = wrapper.get("[data-teste='" + conversations[0].id + "']");

        // Assert
        expect(component.text()).toEqual(conversations[0].nome);
    })
});