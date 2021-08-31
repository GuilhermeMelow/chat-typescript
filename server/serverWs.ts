import { Server } from 'http';
import ws from 'ws';

export function serverWs(server: Server) {
    const wss = new ws.Server({ server });

    wss.on("connection", (socket: ws) => {
        socket.addEventListener("message", (message) => broadcastMessage(socket, message.data));
    });

    const broadcastMessage = (sender: ws, message: any) => {
        wss.clients.forEach(cliente => {
            if (cliente.readyState === ws.OPEN && cliente !== sender) {
                cliente.send(message);
            }
        });
    }
}