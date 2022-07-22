import { Endpoint, Swimmer } from "@api/types";
import config from "@config";
import { EVENTS_NAMES } from "@services/websocket/events";
import axios from "axios";
import { assert } from "console";
import { io as WebSocketClient } from "socket.io-client";
const createNewTraining: Endpoint = async (req, res) => {
    const {
        reaction_time_diff_in_milliseconds
    } = req.query
    const webSocketURL = config.apiFullUrl.replace("https://", "ws://");

    const socket = WebSocketClient(webSocketURL);

    socket.connect();

    const abortTimeout = setTimeout(() => {
        console.log("[websocket] Timed out.");
        res.status(408).json({ error: true })
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
