import { shallowMount } from '@vue/test-utils'
import Tabs from '@/components/chat/Tabs.vue'
import IDictionary from '@/types/IDictionary';

describe('Tabs.vue', () => {
    const dictionary: IDictionary<string, string> = {}
    dictionary[0] = { Key: "teste1", Value: "testeValue1" };
    dictionary[1] = { Key: "teste2", Value: "testeValue2" };

    function build() {
        const wrapper = shallowMount(Tabs, {
            props: {
                tabs: dictionary,
            },
        });

        return { wrapper, dictionary };
    }

    it("ao selecionar uma tab, deve abrir o conteudo da mesma", async () => {
        // Arrange
        const { wrapper, dictionary } = build();
        const tab = wrapper.get("[data-teste='" + dictionary[1].Value + "']");

        // Act
        await tab.trigger('click');
        const componentResult = wrapper.get("[data-teste='componentTab']");

        // Assert
        const componentResultName = componentResult.element.nodeName.toLowerCase();
        const componentName = dictionary[1].Value.toLowerCase();

        expect(componentResultName).toEqual(componentName);
    })
})