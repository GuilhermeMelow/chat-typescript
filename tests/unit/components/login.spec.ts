import { shallowMount } from '@vue/test-utils'
import * as functions from "@/components/login/functions/Index"
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

    it('ao enviar um nome invalido, deve ter uma mensagem de erro', async () => {
        // Arrange
        const useLogin = functions.useLogin();

        // Act
        await useLogin.entrar("");

        // Assert
        expect(useLogin.error).not.toBe("");
    });
});
