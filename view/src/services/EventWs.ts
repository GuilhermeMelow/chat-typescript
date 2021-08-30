
export interface IEventWs {
    send(key: string, value: any): void,
    createListener(key: string, callback: (data: any) => void): void
}

interface IEventListener {
    key: string,
    callback(data: any): void
}

export class EventWs implements IEventWs {
    private readonly ws: WebSocket;
    private static readonly eventListeners: IEventListener[] = [];

    constructor(ws: WebSocket) {
        this.ws = ws;

        this.ws.addEventListener("message", (message) => this.getListener(message));
    }

    public send(key: string, value: any) {
        this.ws.send(JSON.stringify({ key, value }));
    }

    public createListener(key: string, callback: (data: any) => void): void {
        EventWs.eventListeners.push({ key, callback });
    }

    private getListener(message: MessageEvent) {
        const data = JSON.parse(message.data);
        const eventListener = EventWs.eventListeners.find(l => l.key == data.key);

        eventListener?.callback(data.value);
    }
}
