import api from "services/api"

export const createSwimmerForCoach = async ({
    name = "",
    coachId
}) => {
    const url = `/coach/${coachId}/swimmers`;

    await api.post(url, {
        name,
    })

    return {
        name
    }
}