import config from "@config";
import express from "express";
import jwt from 'express-jwt';

const getTokenFromHeader = (req: express.Request) => {

    const hasToken = !!req?.headers?.authorization?.match("Bearer ")
    console.log({ hasToken });

    if (hasToken) {
        const [_, token] = req.headers.authorization?.split(" ") as string[]
        return token;
    }
    return null;
}


const isAuth = jwt({
    secret: config.jwtSecret,
    algorithms: [config.jwtAlgorithm],
    userProperty: 'token',
    getToken: getTokenFromHeader,

});
export default {
    isAuth
}