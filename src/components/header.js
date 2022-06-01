import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = ({ open }) => {
    return (
        <div className="h-14 w-full flex justify-between items-center px-32 sticky top-0 z-20 bg-white">
            <span>
                <img className='h-6' src={logo} />
            </span>
            <ul>
                <li className="inline-block mr-5 text-md font-medium">
                <Link to='/' >Home</Link>
                </li>
                <li className="inline-block mr-5 text-md font-medium">
                    <Link to='/about' >About</Link>
                </li>
                <li className="inline-block mr-5 text-md font-medium cursor-pointer"><a onClick={open}>Contact</a></li>
            </ul>
            <span className='inline-flex'>
                <FaLinkedin style={{ fontSize: "30px" }} />
                <FaGithub style={{ fontSize: "30px" }} />
            </span>
        </div>
    );
};

export default Header;
