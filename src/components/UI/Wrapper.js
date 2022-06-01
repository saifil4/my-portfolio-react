import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <div className="relative px-8 md:flex-row md:px-32">
            {children}
        </div>
    )
}

export default Wrapper