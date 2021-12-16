
import express from 'express';
import cors from 'cors';
import routes from '@api/routes';
import config from '@config';
import middlewares from '@api/middlewares';

const whitelist = {
    "https://swimmer-reaction-timer-meter.herokuapp.com": true,
    "http://localhost:5000": true,
    "http://localhost:3000": true,
};

const corsOptions = {
    origin: (origin, callback) => {
        const hasValidOrigin = !origin || whitelist[origin];

        if (hasValidOrigin) return callback(null, true)

        console.info("[api]: blocked by cors: " + origin);

        callback(new Error('Not allowed by CORS'))
    },
    credentials: true,
    optionsSuccessStatus: 200 // retro-compatibility
}

const initServer = ({ app }: { app: express.Application }) => {

    app.use(cors(corsOptions));

    app.use(express.json());

    app.use(
        config.apiBaseURL as string,
        routes
    );

    app.use(
        middlewares.errors
    )

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