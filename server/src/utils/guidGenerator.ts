export class Guid {
    private readonly mask = "00000000-0000-0000-0000-000000000000"
    private readonly separatorChar = '-';
    private readonly value: string;

    constructor() {
        this.value = this.generate();
    }

    public toString(): string {
        return this.value;
    }

    private generate(): string {
        const min = 2;
        const base = 16;

        let result = '';
        this.mask.split(this.separatorChar).forEach((data) => {
            const max = data.length + min;
            result += Math.random().toString(base).substring(min, max) + '-';
        })

        return result.substring(1, result.length - 1);
    }
}
