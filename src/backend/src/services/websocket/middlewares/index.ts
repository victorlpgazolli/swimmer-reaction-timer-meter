import parse from '@services/websocket/middlewares/parse'
import getAction from '@services/websocket/middlewares/action'

const initMiddlewares = () => {

    return async (initalData = "") => {
        const parsedValues = await parse(initalData);

        const handler = await getAction(parsedValues);

        return handler
    }
}

export default initMiddlewares()