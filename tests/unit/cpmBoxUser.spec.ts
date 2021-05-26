import { shallowMount } from '@vue/test-utils'
import BoxUser from '@/components/chat/BoxUser.vue'

describe('BoxUser.vue', () => {
    function build() {
        const wrapper = shallowMount(BoxUser);

        return { wrapper };
    }

    it("ao selecionar uma tab, deve abrir o conteudo da mesma", async () => {
        // Arrange
        const { wrapper } = build();
        const getComponent = () => wrapper.get("[data-teste='componentTab']");
        const tab = wrapper.get("[data-teste='Chats']");

        // Act
        const oldComponentName = getComponent().element.nodeName;
        await tab.trigger('click');
        const newComponentName = getComponent().element.nodeName;

        // Assert
        expect(oldComponentName === newComponentName).toBeFalsy();
    })
})