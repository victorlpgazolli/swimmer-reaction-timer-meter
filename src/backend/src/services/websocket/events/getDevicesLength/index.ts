export default ({
    devices = new Set(),
    callback,
}) => {
    if (!callback) return;

    callback({
        devices: Array.from(devices.values())
    });
}