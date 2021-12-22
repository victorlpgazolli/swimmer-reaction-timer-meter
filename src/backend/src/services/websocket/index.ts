
import {
    Application
} from 'express';
import { Server as WebSocketServer } from "socket.io";
import events, { EVENTS_NAMES } from '@services/websocket/events';
import { Server } from 'http';

const initServer = ({ server }: { app: Application, server: Server }) => {

    const io = new WebSocketServer(server, { transports: ['websocket', 'polling'] });

    console.log("[websocket] started websocket service");

    io.on('connection', (client) => {

        console.log("[websocket] new client connected: ", client.id);

        client.on(EVENTS_NAMES.training, events.trainingListener);

        client.on(EVENTS_NAMES.hello, events.helloListener);

    });

}


export default ({ app: expressApp, server }) => initServer({ app: expressApp, server })