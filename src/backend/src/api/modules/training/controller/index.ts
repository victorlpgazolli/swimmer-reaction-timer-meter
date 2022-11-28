import { Endpoint, Swimmer } from "@api/types";
import config from "@config";
import { EVENTS_NAMES } from "@services/websocket/events";
import { io as WebSocketClient } from "socket.io-client";
const createNewTraining: Endpoint = async (req, res) => {
    const {
        reaction_time_diff_in_milliseconds
    } = req.query
    const webSocketURL = config.apiFullUrl.replace("https://", "wss://");

    console.log(`[websocket] received reaction time diff in milliseconds=${reaction_time_diff_in_milliseconds}`);

    const socket = WebSocketClient(webSocketURL);

    console.log("[websocket] trying to connect to web socket URL=", webSocketURL);

    socket.connect();

    const abortTimeout = setTimeout(() => {
        const errorMessage = "[websocket] timed out to " + webSocketURL
        console.log(errorMessage);
        socket.disconnect()
        res.status(408).json({ error: true, reason: errorMessage })
    }, 10 * 1000);

    socket.on("connect", () => {
        clearTimeout(abortTimeout)

        socket.emit(EVENTS_NAMES.turnClientToDevice);
        socket.emit(EVENTS_NAMES.training, { reaction_time_diff_in_milliseconds, }, (response) => {
            console.log("[websocket] emitted training to api, response: " + JSON.stringify(response));

            res.status(201).json({ ok: true });
            socket.disconnect()
        });
    });
}

export default {
    createNewTraining
}
