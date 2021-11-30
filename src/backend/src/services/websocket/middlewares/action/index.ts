
import { ActionMiddleware, ParsedMessage } from "@services/websocket/types";
import axios from 'axios'
import config from "@config";
import {assert} from "console";
import { Swimmer } from "@api/types";

const getAction: ActionMiddleware = async (payload: ParsedMessage) => {

    const actionPerCommand = {
        [payload.command]: async (message) => { console.log(message) },
        training: async ({ message: reaction_time_diff_in_milliseconds }) => {
          try {
            assert(
              String(reaction_time_diff_in_milliseconds).length > 0,
              "reaction_time_diff_in_millisecond should be > 0"
            );

            const getCurrentSwimmerUrl = config.apiFullUrl + config.apiBaseURL + "/v1/swimmer/current";

            const currentSwimmer: Swimmer | null = await axios.get(getCurrentSwimmerUrl);

            if(!currentSwimmer) {
              console.log(`No current swimmer for ${reaction_time_diff_in_milliseconds}, exiting...`);
              return;
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
          } catch (error) {
            console.log(error.message);
          }

        },
    }

    const action = actionPerCommand[payload.command];

    return () => action({ message: payload.message })
}

export default getAction
