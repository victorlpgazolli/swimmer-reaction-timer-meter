import { Endpoint, LoginResponse } from "@types";

import { JwtPayload } from "jsonwebtoken";

import services from "@services";




const loginUser: Endpoint = (req, res) => {


    const userData = {
        username: "teste",
        password: "12321"
    };

    const token = services.auth.generateToken({
        username: userData.username
    });

    const response = {
        username: userData.username,
        token
    }

    res.json(response as LoginResponse)

}


const patchCoach: Endpoint = (req, res) => {
    // const decodedToken = req.user as JwtPayload;
    // const userData = decodedToken.data;
    // res.json(userData);
}
const deleteCoach: Endpoint = (req, res) => {
    // const decodedToken = req.user as JwtPayload;
    // const userData = decodedToken.data;
    // res.json(userData);
}
const getCoachData: Endpoint = (req, res) => {
    // const decodedToken = req.user as JwtPayload;
    // const userData = decodedToken.data;
    // res.json(userData);
}

export default {
    getCoachData,
    deleteCoach,
    patchCoach,
    loginUser
}