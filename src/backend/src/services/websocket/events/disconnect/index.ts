import { EVENTS_NAMES, ROOMS_NAMES } from "..";

export default ({
    clients = new Set(),
    id,
    io
}) => {
    console.log("[websocket] client disconnected: ", id);
    clients.delete(id);
    io.to(ROOMS_NAMES.connection).emit(EVENTS_NAMES.clientsLength, {
        clients: Array.from(clients.values())
    })
}