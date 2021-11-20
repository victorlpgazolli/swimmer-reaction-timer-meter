import middlewares from "@services/websocket/middlewares"


const handler = ({ client, server }) => {
  client.on("message", async (rawData = "") => {
    const action = await middlewares(rawData);
    action()
  })
}

export default handler
