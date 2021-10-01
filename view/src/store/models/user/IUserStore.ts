import { IUserState } from "./IUserState";

export interface IUserStore {
    state: IUserState,
    createUser(): Promise<void>
}
