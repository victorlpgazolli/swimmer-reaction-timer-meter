import { Endpoint, Swimmer } from "@api/types";
import config from "@config";
import axios from "axios";
import { assert } from "console";
const createNewTraining: Endpoint = async (req, res) => {
    const {
        reaction_time_diff_in_milliseconds
    } = req.body
    assert(
        String(reaction_time_diff_in_milliseconds).length > 0,
        "reaction_time_diff_in_millisecond should be > 0"
    );

    const getCurrentSwimmerUrl = config.apiFullUrl + config.apiBaseURL + "/v1/swimmer/current";

    const currentSwimmer: Swimmer | null = await axios.get(getCurrentSwimmerUrl);

    if (!currentSwimmer) {
        console.log(`No current swimmer for ${reaction_time_diff_in_milliseconds}, exiting...`);
        return res.status(404).json({ error: "No current swimmer" })
    }
    const {
        id: currentSwimmerId,
        coachId
    } = currentSwimmer;

    assert(
        String(currentSwimmerId).length > 0,
        "currentSwimmerId should exists"
    );

    const createNewTrainingUrl = config.apiFullUrl + config.apiBaseURL + `/v1/swimmer/${currentSwimmerId}/trainings`;

    await axios.post(createNewTrainingUrl, {
        timestamp: new Date().getTime(),
        reaction_time_diff_in_milliseconds,
    });

    res.status(201).json({ ok: true })
}

export default {
    createNewTraining
}
