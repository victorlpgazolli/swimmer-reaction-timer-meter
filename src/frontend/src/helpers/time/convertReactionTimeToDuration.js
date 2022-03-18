import {
    intervalToDuration,
    addMilliseconds
} from 'date-fns'

export const convertReactionTimeToDuration = (reaction_time_diff_in_milliseconds) => {

    const start = new Date();
    const end = addMilliseconds(start, reaction_time_diff_in_milliseconds);

    return intervalToDuration({
        start,
        end
    })
}