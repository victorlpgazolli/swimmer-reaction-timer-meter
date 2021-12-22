export const EVENTS_NAMES = {
    training: "training",
    hello: "hello",
    disconnect: "disconnect",
    getClientsLength: "getClientsLength",
    clientsLength: "clientsLength",
}
export const ROOMS_NAMES = {
    disconnection: "disconnection",
    connection: "connection",
}

import trainingListener from './training'
import helloListener from './hello'
import disconnectListener from './disconnect'
import getClientsLengthListener from './getClientsLength'

export default {
    EVENTS_NAMES,
    trainingListener,
    helloListener,
    disconnectListener,
    getClientsLengthListener,
}
