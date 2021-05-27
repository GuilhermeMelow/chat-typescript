import { shallowMount } from '@vue/test-utils'
import Tabs from '@/components/chat/Tabs.vue'
import ITabs from '@/types/ITabs';

describe('Tabs.vue', () => {
    const tabs: ITabs[] = [
        { name: "tab1", component: "componentValue1" },
        { name: "tab2", component: "componentValue2" }
    ];

    function build() {
        const wrapper = shallowMount(Tabs, {
            props: {
                tabs: tabs,
            },
        });

        return { wrapper, tabs };
    }

    it("ao selecionar uma tab, deve abrir o conteudo da mesma", async () => {
        // Arrange
        const { wrapper, tabs } = build();
        const tab = wrapper.get("[data-teste='" + tabs[1].name + "']");

        // Act
        await tab.trigger('click');
        const componentResult = wrapper.get("[data-teste='componentTab']");

        // Assert
        const componentResultName = componentResult.element.nodeName.toLowerCase();
        const componentName = tabs[1].component.toLowerCase();

        expect(componentResultName).toEqual(componentName);
    })
})