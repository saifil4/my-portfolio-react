import React from 'react';

const NavIcon = ({ icon: Icon, onClick }) => {
    return (
        <Icon onClick={onClick} className="cursor-pointer" style={{ fontSize: "30px" }} />
    )
}

export default NavIcon