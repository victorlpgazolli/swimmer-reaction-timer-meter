
import axios from 'axios'
import config from "@config";
import { assert } from "console";
import { Swimmer, SwimmerTraining } from "@api/types";
import { ROOMS_NAMES } from '..';

export default async (payload: SwimmerTraining, callback: any, io: any) => {
    try {
        const {
            reaction_time_diff_in_milliseconds,
            timestamp = new Date().getTime()
        } = payload;

        const hasReactionTime = reaction_time_diff_in_milliseconds > 0;

        if (!hasReactionTime) throw new Error("reaction_time_diff_in_milliseconds should be > 0")

        if (callback) callback({
            status: 1,
        })

        const getCurrentSwimmerUrl = config.apiFullUrl + config.apiBaseURL + "/v1/swimmer/current";

        const {
            data: currentSwimmers
        }: {
            data: Swimmer[] | null
        } = await axios.get(getCurrentSwimmerUrl);

        const [currentSwimmer] = currentSwimmers

        if (!currentSwimmer) {
            console.log(`No current swimmer for ${reaction_time_diff_in_milliseconds}, exiting...`);
            return;
        }

        const {
            _id: currentSwimmerId,
        } = currentSwimmer;

        assert(
            currentSwimmerId?.length > 0,
            "currentSwimmerId should exists"
        );

        const createNewTrainingUrl = config.apiFullUrl + config.apiBaseURL + `/v1/swimmer/${currentSwimmerId}/trainings`;

        await axios.post(createNewTrainingUrl, {
            timestamp,
            reaction_time_diff_in_milliseconds,
        });

        io.to(ROOMS_NAMES.devices_listeners).emit("new_training");

    } catch (error) {
        console.log("[websocket] training message with error: ", error.message);

        if (callback) callback({
            status: 0,
            error: error.message
        })
    }

}