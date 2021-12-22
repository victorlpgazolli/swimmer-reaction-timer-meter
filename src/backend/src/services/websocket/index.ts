
import {
    Application
} from 'express';
import { Server } from "socket.io";
import http from 'http';
import events, { EVENTS_NAMES } from '@services/websocket/events';

const initServer = ({ app }: { app: Application }) => {

    const server = http.createServer(app);

    const io = new Server(server);

    io.on('connection', (client) => {

        console.log("[websocket] new client connected", client);

        client.on(EVENTS_NAMES.training, events.trainingListener);

        client.on(EVENTS_NAMES.hello, events.helloListener);

    });

}


export default ({ app: expressApp }) => initServer({ app: expressApp })