import api from "services/api"

export const patchSwimmer = async ({
    swimmerId,
    ...swimmer
}) => {
    const url = `/swimmer/${swimmerId}`;

    await api.patch(url, swimmer);

    return {
        _id: swimmerId,
        ...swimmer
    }
}