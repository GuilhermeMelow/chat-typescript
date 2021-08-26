import ws from 'ws';

export function serverWs() {
    const wss = new ws.Server({ port: 3000 });
    console.log("\n 🚀[server]: Server-ws is Running on ws://localhost:3000/");

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