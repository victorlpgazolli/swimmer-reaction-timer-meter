
import api from '@api';
import database from '@services/database';
import websocket from '@services/websocket';

// database.connect();

api.attach(websocket);

api.start()