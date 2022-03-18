import React from 'react'
import { SwimmerJumpBody, SwimmerJumpContent, SwimmerJumpName, SwimmerJumpTime, SwimmerNameOpen, SwimmerOpen } from './style'
import Toggle from './toggle';
function SwimmerTraining({
    swimmer,
    onToggle
}) {
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