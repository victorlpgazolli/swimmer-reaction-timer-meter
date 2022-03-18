import { convertReactionTimeToDuration } from 'helpers';
import React from 'react'
import { LoadMore, SwimmerJumpBody, SwimmerJumpContent, SwimmerJumpName, SwimmerJumpTime, SwimmerNameOpen, SwimmerOpen } from './style'
import Toggle from './toggle';
function SwimmerTraining({
    swimmer,
    onToggle
}) {
    console.log(swimmer);
    return (
        <SwimmerOpen>
            <div>
                <SwimmerNameOpen>
                    {swimmer?.name}
                </SwimmerNameOpen>
                <Toggle
                    active={swimmer?.isCurrent}
                    onToggle={() => onToggle(swimmer)}
                />
            </div>
            <div>
                <SwimmerJumpBody>
                    {
                        swimmer.trainings.map((training, index) => {
                            const {
                                seconds,
                            } = convertReactionTimeToDuration(training.reaction_time_diff_in_milliseconds);
                            console.log(training.reaction_time_diff_in_milliseconds);
                            return (
                                <SwimmerJumpContent>
                                    <SwimmerJumpName >
                                        Salto {index + 1}
                                    </SwimmerJumpName>
                                    <SwimmerJumpTime>
                                        {training.reaction_time_diff_in_milliseconds}ms
                                    </SwimmerJumpTime>
                                </SwimmerJumpContent>
                            )
                        })
                    }

                </SwimmerJumpBody>
            </div>
        </SwimmerOpen>
    )
}

export default SwimmerTraining