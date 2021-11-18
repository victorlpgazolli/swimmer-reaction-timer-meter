import config from "@config";
import { RequestHandler } from "express";
import jwt from 'express-jwt';


const jwtAuth: RequestHandler = jwt({
    secret: config.jwtSecret,
    algorithms: [config.jwtAlgorithm],
});


const handlers: RequestHandler[] = [
    jwtAuth,
]

export default handlers