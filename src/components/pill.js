import React from 'react'

function Pill({name}) {
    return (
        <div className="rounded-3xl inline-block px-3 py-1 w-auto font-medium bg-blue-100 shadow text-blue-700 text-center text-lg">
            {name}
        </div>
    )
}

export default Pill;
