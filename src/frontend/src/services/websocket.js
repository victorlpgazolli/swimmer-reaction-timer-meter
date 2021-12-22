import { WEBSOCKET_URL } from 'config/environment'
import socketClient from 'socket.io-client'

export const websocket = {
    connect: () => {
        window.socket = socketClient(WEBSOCKET_URL)
    }
}