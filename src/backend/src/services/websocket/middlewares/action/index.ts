
import { ActionMiddleware, ParsedMessage } from "@services/websocket/types";

const getAction: ActionMiddleware = async (payload: ParsedMessage) => {

    const actionPerCommand = {
        [payload.command]: async (message) => { },
        training: async (message) => { },
    }

    const action = actionPerCommand[payload.command];

    return () => action(payload.message)
}

export default getAction