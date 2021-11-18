import config from '@config';
import {
    connect as connectToMongoDB
} from 'mongoose'

const connect = async () => {
    try {
        connectToMongoDB(
            config.databaseURL
        )
    } catch (error) {
        console.error("Error when connecting to DB:", error.message);
    }
}

export default {
    connect
}