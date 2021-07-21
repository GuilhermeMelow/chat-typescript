export class Chat {
    public id: string;
    public nome: string;
    private aberto: boolean;

    constructor(nome: string, id?: string) {
        this.id = id ?? Math.random().toString(36).substring(7);
        this.nome = nome;
        this.aberto = false;
    }

    public isAberto = () => this.aberto;

    public abrir = () => this.aberto = true;

    public fechar = () => this.aberto = false;
}