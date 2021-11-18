
import {
    Application
} from 'express';
import {
    Server,
} from 'ws';
import http from 'http';
import events from '@services/websocket/events';

const initServer = ({ app }: { app: Application }) => {

    const server = http.createServer(app);

    const wss = new Server({ server });

    wss.on("connection", function connection(client) {
        events.onConnect({
            client,
            server: wss
        })
    });

}


export default ({ app: expressApp }) => initServer({ app: expressApp })