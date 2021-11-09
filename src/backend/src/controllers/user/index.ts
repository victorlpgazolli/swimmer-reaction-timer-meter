import { Endpoint, LoginResponse } from "@types";

import { JwtPayload } from "jsonwebtoken";



const getUserData: Endpoint = (req, res) => {
    const decodedToken = req.user as JwtPayload;
    const userData = decodedToken.data;
    res.json(userData);
}

export default {
    getUserData
}