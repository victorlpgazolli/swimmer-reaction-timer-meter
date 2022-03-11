import { WEBSOCKET_URL } from 'config/environment'
import socketClient from 'socket.io-client'
let socket = null;
export const websocket = {
    connect: () => {
        socket = socketClient(WEBSOCKET_URL)
        window.socket = socket;
        return socket
    },
}