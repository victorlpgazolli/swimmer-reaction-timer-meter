import api from "services/api"

export const getSwimmersFromCoach = async ({
    coachId
}) => {
    const url = `/coach/${coachId}/swimmers`
    const {
        data
    } = await api.get(url);

    const swimmers = data;
    console.log({ data });
    return swimmers
}

