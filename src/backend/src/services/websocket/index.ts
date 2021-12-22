
import {
    Application
} from 'express';
import { Server as WebSocketServer } from "socket.io";
import events, { EVENTS_NAMES, ROOMS_NAMES } from '@services/websocket/events';
import { Server } from 'http';

const initServer = ({ server }: { app: Application, server: Server }) => {

    const io = new WebSocketServer(server, {
        transports: ['websocket', 'polling'],
        cors: {
            origin: "*",
            credentials: true
        }
    });

    console.log("[websocket] started websocket service");
    const clients = new Set();

    io.on('connection', (client) => {
        const {
            id: clientId
        } = client;

        clients.add(clientId);

        console.log("[websocket] new client connected: ", clientId);

        io.to(ROOMS_NAMES.connection).emit(EVENTS_NAMES.clientsLength, {
            clients: Array.from(clients.values())
        })

        client.join(ROOMS_NAMES.disconnection);

        client.join(ROOMS_NAMES.connection);

        client.on(EVENTS_NAMES.disconnect, () => events.disconnectListener({ clients, id: clientId, io }));

        client.on(EVENTS_NAMES.training, events.trainingListener);

        client.on(EVENTS_NAMES.hello, events.helloListener);

        client.on(EVENTS_NAMES.getClientsLength, (callback) => events.getClientsLengthListener({ clients, callback }));

    });

}


export default ({ app: expressApp, server }) => initServer({ app: expressApp, server })