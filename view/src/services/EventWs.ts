
export interface IEventWs {
    send<T>(key: string, value: T): void,
    createListener<T>(key: string, callback: (data: T) => void): void
}

interface IEventListener {
    key: string,
    callback(data: unknown): void
}

export class EventWs implements IEventWs {

    constructor(private readonly ws: WebSocket, private readonly eventListeners: IEventListener[] = []) {
        this.ws.addEventListener("message", (message) => this.getListener(message));
    }

    public send<T>(key: string, value: T): void {
        this.ws.send(JSON.stringify({ key, value }));
    }

    public createListener<T>(key: string, callback: (data: T) => void): void {
        this.eventListeners.push({ key, callback });
    }

    private getListener(message: MessageEvent): void {
        const data = JSON.parse(message.data);
        const eventListener = this.eventListeners.find((l) => l.key === data.key);

        eventListener?.callback(data.value);
    }
}
