import React from 'react'

export const NavList = ({ children, isVertical = true }) => {
    return (
        <ul className={`flex ${isVertical ? 'flex-col' : 'flex-row'} gap-x-5 gap-y-3`}>
            {children}
        </ul>
    )
}
