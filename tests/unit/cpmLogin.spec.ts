import { shallowMount } from '@vue/test-utils'
import Login from '@/components/login/Login.vue'
import { IChat } from '@/types/IChatService'


describe('Login.vue', () => {
    function build() {
        const service = { entrar: jest.fn() };
        const user: IChat = { id: "123", nome: "teste" };
        service.entrar.mockReturnValue(user);

        const wrapper = shallowMount(Login, {
            global: {
                provide: {
                    'chatService': service
                }
            }
        })

        return {
            wrapper,
            textbox: wrapper.get("[data-teste='nome-usuario']"),
            loginButton: wrapper.get("[data-test='btn-entrar']"),
            service,
        }
    }

    it('ao clicar no botão de login, deve executar a entrada.', async () => {
        // Arrange
        const { textbox, loginButton, service } = build();
        textbox.setValue("teste");

        // Act
        await loginButton.trigger('click');

        // Assert
        expect(service.entrar).toHaveBeenCalledTimes(1);
    });

    it('ao enviar um nome invalido, deve não entrar', async () => {
        // Arrange
        const { textbox, wrapper, loginButton } = build();
        const errorMessage = wrapper.get("[data-teste='error-message']");
        textbox.setValue("");

        // Act
        await loginButton.trigger('click');

        // Assert
        expect(errorMessage.text() === "").toBeFalsy();
    });
});
