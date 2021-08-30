"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverWs = void 0;
const ws_1 = __importDefault(require("ws"));
function serverWs() {
    const wss = new ws_1.default.Server({ port: 3000 });
    console.log("\n 🚀[server]: Server-ws is Running on ws://localhost:3000/");
    wss.on("connection", (socket) => {
        socket.addEventListener("message", (message) => broadcastMessage(socket, message.data));
    });
    const broadcastMessage = (sender, message) => {
        wss.clients.forEach(cliente => {
            if (cliente.readyState === ws_1.default.OPEN && cliente !== sender) {
                cliente.send(message);
            }
        });
    };
}
exports.serverWs = serverWs;
//# sourceMappingURL=serverWs.js.map