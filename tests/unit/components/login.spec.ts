import { shallowMount } from '@vue/test-utils'
import Login from '@/components/login/Login.vue'
import router from '@/router';

describe('Login.vue', () => {
    function build() {
        const service = { entrar: jest.fn() };

        const wrapper = shallowMount(Login, {
            global: {
                plugins: [router],
                provide: {
                    'chatService': service
                }
            }
        })

        return {
            service,
            components: {
                textbox: wrapper.get("[data-teste='nome-usuario']"),
                loginButton: wrapper.get("[data-test='btn-entrar']"),
            },
        }
    }

    it('ao clicar no botão de login, deve executar a entrada', async () => {
        // Arrange
        const { components, service } = build();
        components.textbox.setValue("teste");

        // Act
        await components.loginButton.trigger('click');

        // Assert
        expect(service.entrar).toHaveBeenCalledTimes(1);
    });
});
