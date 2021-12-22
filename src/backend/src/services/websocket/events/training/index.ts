
import axios from 'axios'
import config from "@config";
import { assert } from "console";
import { Swimmer, SwimmerTraining } from "@api/types";

export default async (payload: SwimmerTraining) => {
    try {
        const {
            reaction_time_diff_in_milliseconds,
            timestamp = new Date().getTime()
        } = payload;

        assert(
            reaction_time_diff_in_milliseconds > 0,
            "reaction_time_diff_in_millisecond should be > 0"
        );

        const getCurrentSwimmerUrl = config.apiFullUrl + config.apiBaseURL + "/v1/swimmer/current";

        const currentSwimmer: Swimmer | null = await axios.get(getCurrentSwimmerUrl);

        if (!currentSwimmer) {
            console.log(`No current swimmer for ${reaction_time_diff_in_milliseconds}, exiting...`);
            return;
        }

        const {
            id: currentSwimmerId,
            coachId
        } = currentSwimmer;

        assert(
            currentSwimmerId.length > 0,
            "currentSwimmerId should exists"
        );

        const createNewTrainingUrl = config.apiFullUrl + config.apiBaseURL + `/v1/swimmer/${currentSwimmerId}/trainings`;

        await axios.post(createNewTrainingUrl, {
            timestamp: new Date().getTime(),
            reaction_time_diff_in_milliseconds,
        });
    } catch (error) {
        console.log(error.message);
    }

}