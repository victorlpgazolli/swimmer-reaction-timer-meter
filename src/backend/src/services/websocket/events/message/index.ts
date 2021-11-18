
const handler = ({ client, server }) => {
    client.on("message", console.log)
}

export default handler