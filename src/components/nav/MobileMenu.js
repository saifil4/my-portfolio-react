import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NavList } from './NavList';
import NavListItem from './NavListItem';

const MobileMenu = ({ open, expand }) => {

    return (
        <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
            {
                expand &&
                <motion.div
                    initial={{ y: "-30%", opacity: 0 }}
                    animate={{ y: "0", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 1, ease: "linear", type: "spring", damping: 25, stiffness: 300 }}
                    className='absolute top-14 left-0 px-6 py-4 bg-white w-full md:hidden'>
                    <NavList>
                        <NavListItem>
                            <Link to='/' >Home</Link>
                        </NavListItem>
                        <NavListItem>
                            <Link to='/about' >About</Link>
                        </NavListItem>
                        <NavListItem>
                            <a onClick={open}>Contact</a>
                        </NavListItem>
                        <NavListItem>
                            <a onClick={open}>Github</a>
                        </NavListItem>
                        <NavListItem>
                            <a onClick={open}>Linkedin</a>
                        </NavListItem>
                    </NavList>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default MobileMenu