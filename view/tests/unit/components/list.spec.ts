import { shallowMount } from "@vue/test-utils"
import List from "@/components/List.vue"

describe('List.vue', () => {
    function build() {
        const itens = ["123", "124", "125"];

        return {
            wrapper: shallowMount(List, { props: { values: itens } }),
            itens
        };
    }

    it("ao receber os itens, deve criar a mesma quantidade que recebeu", () => {
        // Arrange
        const { wrapper, itens } = build();

        // Act
        const result = wrapper.get("[data-teste='itens']");

        // Assert
        expect(result.element.children.length).toEqual(itens.length);
    })
});
