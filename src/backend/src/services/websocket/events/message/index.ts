import middlewares from "@services/websocket/middlewares"
import parse from '@services/websocket/middlewares/parse'
import getAction from '@services/websocket/middlewares/action'

const handler = ({ client, server }) => {

  const websocketMiddleware = new middlewares();

  websocketMiddleware.use(parse)
  websocketMiddleware.use(getAction);

  client.on("message", async (rawData = "") => {
    const action = await websocketMiddleware.execute(rawData);

    await action()

  })
}

export default handler
