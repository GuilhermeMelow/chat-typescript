import { shallowMount } from "@vue/test-utils"
import List from "@/components/List.vue"

describe('List.vue', () => {
    const build = () => {
        const itens = ["123", "124", "125"];

        return {
            itens,
            wrapper: shallowMount(List, { props: { values: itens } }),
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
