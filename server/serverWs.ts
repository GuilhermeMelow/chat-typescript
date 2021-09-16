import { Server } from 'http';
import ws from 'ws';

export const serverWs = (server: Server): void => {
    const wss = new ws.Server({ server });

    const broadcastMessage = (sender: ws, message: string) => {
        wss.clients.forEach((cliente) => {
            if (cliente.readyState === ws.OPEN && cliente !== sender) {
                cliente.send(message);
            }
        });
    };

    wss.on('connection', (socket: ws) => {
        socket.addEventListener('message', (message) => {
            broadcastMessage(socket, message.data);
        });
    });
};
