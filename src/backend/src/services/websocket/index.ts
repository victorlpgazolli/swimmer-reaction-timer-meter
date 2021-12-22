
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
    const devices = new Set();


    io.on('connection', (client) => {

        const {
            id: clientId
        } = client;

        clients.add(clientId);

        io.emit(EVENTS_NAMES.clientsLength, { clients: Array.from(clients.entries()) })

        console.log("[websocket] new client connected: ", clientId);

        client.on(EVENTS_NAMES.disconnect, () => events.disconnectListener({ clients, devices, id: clientId, io }));

        client.on(EVENTS_NAMES.training, events.trainingListener);

        client.on(EVENTS_NAMES.hello, events.helloListener);

        client.on(EVENTS_NAMES.turnClientToDevice, () => events.turnClientToDeviceListener({ id: clientId, devices, io }));

        client.on(EVENTS_NAMES.turnClientToSubscriber, () => events.turnClientToSubscriberListener({ client }));

        client.on(EVENTS_NAMES.getClientsLength, (callback) => events.getClientsLengthListener({ clients, callback }));

        client.on(EVENTS_NAMES.getDevicesLength, (callback) => events.getDevicesLengthListener({ devices, callback }));

    });

}


export default ({ app: expressApp, server }) => initServer({ app: expressApp, server })