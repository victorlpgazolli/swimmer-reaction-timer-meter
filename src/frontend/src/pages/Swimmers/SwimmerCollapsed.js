import React from 'react'
import { SwimmerName, SwimmerCollapsed as SwimmerCollapsedStyle } from './style'
import Toggle from './toggle'

function SwimmerCollapsed({
    swimmer,
    onToggle
}) {
    return (
        <SwimmerCollapsedStyle>
            <SwimmerName>
                {swimmer?.name}
            </SwimmerName>
            <Toggle
                active={swimmer?.isCurrent}
                onToggle={() => onToggle(swimmer)}
            />
        </SwimmerCollapsedStyle>
    )
}

export default SwimmerCollapsed