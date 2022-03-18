import React from 'react'
import ToggleButton from 'react-toggle-button'

function Toggle({
    onToggle,
    active = false
}) {
    return (
        <ToggleButton
            value={active}
            colors={{
                inactive: {
                    base: '#3F8A95',
                },
                inactiveThumb: {
                    base: '#8CE6F5',
                },
                active: {
                    base: '#0B4C55',
                },
                activeThumb: {
                    base: '#3F8A95',
                },
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