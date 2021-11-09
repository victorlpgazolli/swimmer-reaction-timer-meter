
import express from 'express';
import cors from 'cors';
import routes from '@api/routes';
import config from '@config';
const initServer = ({ app }: { app: express.Application }) => {

    app.use(cors())

    app.use(express.json());

    app.use(
        config.apiBaseURL as string,
        routes
    );

    return {
        start: (
            port: number = config.port,
            callback: () => void = () => console.log("Started server!!")
        ) => app.listen(port, callback),
    }
}

const expressApp: express.Application = express();


export default initServer({ app: expressApp })