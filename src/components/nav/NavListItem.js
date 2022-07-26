import React from 'react'

const NavListItem = ({ children }) => {
    return (
        <li className="text-md font-medium cursor-pointer">
            {children}
        </li>
    )
}

export default NavListItem