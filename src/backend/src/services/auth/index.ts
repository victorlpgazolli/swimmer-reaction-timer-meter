import config from "config";
import jwt from "jsonwebtoken";
import { Login, User } from "@types";

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


const loginUser = ({
    username,
    password
}: Login) => {
    console.log({
        username,
        password
    });


    return generateToken({ username })
}


export default {
    generateToken,
    loginUser,
    decodeToken,
}