
export interface IEventWs {
    send(key: string, value: unknown): void,
    createListener(key: string, callback: (data: unknown) => void): void
}

interface IEventListener {
    key: string,
    callback(data: unknown): void
}

export class EventWs implements IEventWs {

    constructor(private readonly ws: WebSocket, private readonly eventListeners: IEventListener[] = []) {
        this.ws.addEventListener("message", (message) => this.getListener(message));
    }

    public send(key: string, value: unknown): void {
        this.ws.send(JSON.stringify({ key, value }));
    }

    public createListener(key: string, callback: (data: unknown) => void): void {
        this.eventListeners.push({ key, callback });
    }

    private getListener(message: MessageEvent): void {
        const data = JSON.parse(message.data);
        const eventListener = this.eventListeners.find((l) => l.key === data.key);

        eventListener?.callback(data.value);
    }
}
