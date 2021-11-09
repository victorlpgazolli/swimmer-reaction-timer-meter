
import express from 'express';
import cors from 'cors';
import routes from 'api/routes';
import config from '@config';
import middlewares from 'api/middlewares';
import http from 'http';
const initServer = ({ app }: { app: express.Application }) => {

    app.use(cors())

    app.use(express.json());

    app.use(
        config.apiBaseURL as string,
        routes
    );

    app.use(
        middlewares.errors
    )

    const server = http.createServer(app);
    return {
        start: (
            port: number = config.port,
            callback: () => void = () => console.log("Started server!!")
        ) => app.listen(port, callback),
        attach: (
            callback: ({ app }: { app: express.Application }) => void
        ) => {
            callback({ app });
        }
    }
}

const expressApp: express.Application = express();


export default initServer({ app: expressApp })