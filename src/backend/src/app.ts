
import api from '@api';
import websocket from '@services/websocket';


api.attach(websocket);

api.start()