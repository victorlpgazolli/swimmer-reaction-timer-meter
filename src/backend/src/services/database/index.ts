import config from '@config';
import {
    connect as connectToMongoDB
} from 'mongoose'
import swimmerModel from "@api/modules/swimmer/model";
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

const clear = async () => {
    try {
        console.log("[database] requested to clear db");

        await connect();

        await Promise.all([
            swimmerModel.deleteMany({})
        ]);

        console.log("[database] cleared db");

    } catch (error) {
        console.error("[database] error when clearing DB:", error.message);
    }
}

export default {
    connect,
    clear
}