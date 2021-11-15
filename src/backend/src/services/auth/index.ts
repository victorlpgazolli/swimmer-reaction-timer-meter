import config from "@config";
import jwt from "jsonwebtoken";
import { User } from "@api/types";

const generateToken = (userPayload: User) => {

    const payload = {
        data: userPayload
    }
    const options = {}

    return jwt.sign(payload, config.jwtSecret, options);
}

const decodeToken = (token: string) => {


    return jwt.decode(token);
}




export default {
    generateToken,
    decodeToken,
}