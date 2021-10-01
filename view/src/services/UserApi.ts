import axios from "axios";

export class UserApi {
    private readonly url: string = process.env.VUE_APP_API_ROOT;

    public async create(): Promise<string> {
        const response = await axios.post(`${this.url}/usuario/criar`);

        return response.data;
    }
}
