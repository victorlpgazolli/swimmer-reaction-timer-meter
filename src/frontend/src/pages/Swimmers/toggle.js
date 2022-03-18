import React from 'react'
import ToggleButton from 'react-toggle-button'

const defaultColors = {
    inactive: {
        base: '#3F8A95',
    },
    inactiveThumb: {
        base: '#8CE6F5',
    },
    active: {
        base: '#3F8A95',
    },
    activeThumb: {
        base: '#0B4C55',
    },
}
function Toggle({
    onToggle,
    active = false,
    colors = {}
}) {
    return (
        <ToggleButton
            value={active}
            colors={{
                ...defaultColors,
                ...colors,
            }}
            inactiveLabel={""}
            trackStyle={{
                height: 25,
            }}
            thumbStyle={{ width: 15, height: 15, }}
            activeLabel={""}
            onToggle={(value) => {
                onToggle(value)
            }} />
    )
}

export default Toggle