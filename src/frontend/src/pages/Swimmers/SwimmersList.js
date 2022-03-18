import React from 'react'
import SwimmerCollapsed from './SwimmerCollapsed'
import SwimmerTraining from './SwimmerTraining'

function SwimmersList({
    swimmers = [],
    onToggle,
    currentSwimmerIndex
}) {
    return (
        currentSwimmerIndex !== -1 ?
            <SwimmerTraining
                swimmer={swimmers[currentSwimmerIndex]}
                onToggle={onToggle}
            />
            :
            swimmers?.map(swimmer => (
                <SwimmerCollapsed
                    swimmer={swimmer}
                    onToggle={onToggle}
                />

            ))
    )
}

export default SwimmersList