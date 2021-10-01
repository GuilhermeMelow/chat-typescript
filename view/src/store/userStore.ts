import { User, IUserStore, IUserState } from "@/store/models/user/Index";
import { UserApi } from "@/services/UserApi";
import { reactive } from "vue";


export const createUserStore = (userApi: UserApi): IUserStore => {
    const state: IUserState = reactive({
        user: null,
    });

    const createUser = async (): Promise<void> => {
        const id = await userApi.create();

        state.user = new User(id);
    }

    return { createUser };
}
