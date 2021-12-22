export const EVENTS_NAMES = {
    training: "training",
    hello: "hello"
}
import trainingListener from './training'
import helloListener from './hello'

export default {
    EVENTS_NAMES,
    trainingListener,
    helloListener
}
