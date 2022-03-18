import api from "services/api"

export const startSwimmerTraining = async ({
    swimmerId
}) => {
    const url = `/swimmer/${swimmerId}/start`;

    await api.post(url);

    return swimmerId
}