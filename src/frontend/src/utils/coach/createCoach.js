import { API_URL } from "config/environment"
import api from "services/api"

export const createCoach = async ({
    name = "",
    email = "",
    auth_token_provider = ""
}) => {
    await api.post(API_URL, {
        name,
        email,
        auth_token_provider
    })
}