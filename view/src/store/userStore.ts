import axios from "axios";
import { reactive } from "vue";


export class UserApi {
    private readonly url: string = process.env.VUE_APP_API_ROOT;

    public async create(): Promise<string> {
        const response = await axios.post(`${this.url}/usuario/criar`);

        return response.data;
    }
}


class User {
    constructor(public id: string) { }
}

interface IUserState {
    user: User | null
}

export interface IUserStore {
    createUser(): Promise<void>
}

export const createUserStore = (userApi: UserApi): IUserStore => {
    const state: IUserState = reactive({
        user: null
    });

    const createUser = async (): Promise<void> => {
        const id = await userApi.create();

        state.user = new User(id);
    }

    return { createUser };
}
