import { EVENTS_NAMES, ROOMS_NAMES } from "..";

export default ({
    clients = new Set(),
    id,
    devices = new Set(),
    io
}) => {
    const clientWasADevice = devices.has(id);

    if (clientWasADevice) {
        devices.delete(id);
        io.to(ROOMS_NAMES.devices_listeners).emit(EVENTS_NAMES.devicesLength, {
            devices: Array.from(devices.entries())
        })
    }
    console.log("[websocket] client disconnected: ", id);
    clients.delete(id);
    io.emit(EVENTS_NAMES.clientsLength, {
        clients: Array.from(clients.entries())
    })
}