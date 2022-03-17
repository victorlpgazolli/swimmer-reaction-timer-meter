export default ({
    clients = new Set(),
    callback,
}) => {
    if (callback) callback({
        clients: Array.from(clients.values())
    });
}