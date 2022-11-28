import database from '@services/database';
database.connect();

import api from '@api';
import websocket from '@services/websocket';

api.attach(websocket);

api.start()


import process from 'process'
process.on("uncaughtException", (error) => console.log(error));
process.on("unhandledRejection", (error) => console.log(error));