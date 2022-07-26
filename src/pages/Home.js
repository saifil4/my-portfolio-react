import React, { useState } from 'react';
import AppNav from '../components/nav'; 
import Intro from '../components/intro/intro';
import Work from '../components/work';
import ContactModal from '../components/contact-modal';
import { AnimatePresence } from 'framer-motion';

const Home = () => {
    const [showContact, setShowContact] = useState(false);

    const open = () => { setShowContact(true) }
    const close = () => { setShowContact(false) }
    return (
        <div>
            <AppNav open={open} />

            <Intro />
            <Work />
            <div className="py-40 bg-black px-10 h-screen">
                <div className="flex flex-col justify-center text-center">
                    {showContact && <span>Hello</span>}
                    <h1 className="text-4xl font-bold text-center mb-3 text-white">Have a project for me?</h1>
                </div>
            </div>
            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {
                    showContact && <ContactModal handleClose={close} />
                }
            </AnimatePresence>

        </div>
    )
}

export default Home;
