export const EVENTS_NAMES = {
    training: "training",
    hello: "hello",
    disconnect: "disconnect",
    getClientsLength: "getClientsLength",
    clientsLength: "clientsLength",
    getDevicesLength: "getDevicesLength",
    devicesLength: "devicesLength",
    turnClientToDevice: "turnClientToDevice",
    turnClientToSubscriber: "turnClientToSubscriber"
}
export const ROOMS_NAMES = {
    devices_listeners: "devices/listeners",
}

import trainingListener from './training'
import helloListener from './hello'
import disconnectListener from './disconnect'
import getClientsLengthListener from './getClientsLength'
import getDevicesLengthListener from './getDevicesLength'
import turnClientToDeviceListener from './turnClientToDevice'
import turnClientToSubscriberListener from './turnClientToSubscriber'

export default {
    EVENTS_NAMES,
    trainingListener,
    helloListener,
    disconnectListener,
    getClientsLengthListener,
    getDevicesLengthListener,
    turnClientToDeviceListener,
    turnClientToSubscriberListener,
}
