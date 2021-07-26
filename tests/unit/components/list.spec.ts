import { shallowMount } from "@vue/test-utils"
import List from "@/components/List.vue"
import { chats } from "../ChatSetup";

describe('List.vue', () => {
    function build() {
        const wrapper = shallowMount(List, {
            props: { values: chats }
        });
        return { wrapper };
    }

    it("ao receber chats, deve criar a mesma quantidade de itens", () => {
        // Arrange
        const { wrapper, } = build();

        // Act
        const itens = wrapper.get("[data-teste='itens']");

        // Assert
        expect(itens.element.children.length).toEqual(chats.length);
    })
});