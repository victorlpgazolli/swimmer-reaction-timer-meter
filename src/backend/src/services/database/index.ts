import config from '@config';
import { assert } from 'console';
import {
    connect as connectToMongoDB
} from 'mongoose'

const connect = async () => {
    try {
        const hasDatabaseUrl = config.databaseURL.length > 0
        if (!hasDatabaseUrl) throw new Error("database url must exist")

        connectToMongoDB(
            config.databaseURL
        )
        console.log("[database] connected to DB");

    } catch (error) {
        console.error("[database] error when connecting to DB:", error.message);
    }
}

export default {
    connect
}