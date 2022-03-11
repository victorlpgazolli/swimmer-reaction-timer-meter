import api from "services/api"

export const createSwimmerForCoach = async ({
    firstName = "",
    lastName = "",
    coachId
}) => {
    const url = `/coach/${coachId}/swimmers`;

    await api.post(url, {
        name: firstName + " " + lastName,
    })

    return {
        firstName,
        lastName
    }
}