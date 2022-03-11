import api from "services/api"

export const createCoach = async ({
    name = "",
    email = "",
    auth_token_provider = ""
}) => {
    const url = "/coach"
    const {
        data: {
            _id: coachId
        }
    } = await api.post(url, {
        name,
        email,
        auth_token_provider
    });

    return {
        coachId
    }
}