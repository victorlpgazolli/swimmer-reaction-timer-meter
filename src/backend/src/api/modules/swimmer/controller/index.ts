import { Endpoint } from "@types";


const createNewSwimmer: Endpoint = (req, res) => {

    res.json({});
}

const listSwimmersByCoachId: Endpoint = (req, res) => {

    res.json({});
}
const patchSwimmer: Endpoint = (req, res) => {

    res.json({});
}
const deleteSwimmerByCoachId: Endpoint = (req, res) => {

    res.json({});
}

export default {
    listSwimmersByCoachId,
    createNewSwimmer,
    patchSwimmer,
    deleteSwimmerByCoachId
}