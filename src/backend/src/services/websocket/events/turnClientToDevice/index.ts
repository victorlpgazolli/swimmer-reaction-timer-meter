import { EVENTS_NAMES, ROOMS_NAMES } from "..";

export default ({
    devices = new Set(),
    id,
    io
}) => {
    devices.add(id)
    console.log("[websocket] new device: ", devices.size);

    io.to(ROOMS_NAMES.devices_listeners).emit(EVENTS_NAMES.devicesLength, {
        devices: Array.from(devices.values())
    })
}