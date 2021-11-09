import { Endpoint, LoginResponse } from "@types";

import services from "@services";


const loginUser: Endpoint = (req, res) => {


    const userData = {
        username: "teste",
        password: "12321"
    };

    const token = services.auth.loginUser(userData);

    const response = {
        username: userData.username,
        token
    }

    res.json(response as LoginResponse)

}

export default {
    loginUser
}