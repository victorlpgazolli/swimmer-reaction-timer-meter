
import { ParseMiddleware } from "@services/websocket/types";

const parseValues: ParseMiddleware = async (rawMessage = "") => {

    const [command, message] = rawMessage.split("/");

    return {
        command,
        message
    }
}

export default parseValues