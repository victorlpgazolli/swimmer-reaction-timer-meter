
import message from '@services/websocket/events/message'
import ping from '@services/websocket/events/ping'


const registerListeners = ({ client, server }) => {
    const listeners = [
        message,
        ping
    ]

    listeners.forEach(fn => fn({ client, server }));

}
export default {
    onConnect: registerListeners,
}
