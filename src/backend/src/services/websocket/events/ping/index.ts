

function heartbeat() {
    clearTimeout(this.pingTimeout);
    this.pingTimeout = setTimeout(() => {
        this.terminate();
    }, 30000 + 1000);
}


const handler = ({ client, server }) => {
    client.on('open', heartbeat);
    client.on('ping', heartbeat);
    client.on('close', function clear() {
        clearTimeout(this.pingTimeout);
    });
}

export default handler