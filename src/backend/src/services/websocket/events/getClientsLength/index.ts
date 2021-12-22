export default ({
    clients = new Set(),
    callback,
}) => {
    callback && callback({
        clients: Array.from(clients.values())
    });
}