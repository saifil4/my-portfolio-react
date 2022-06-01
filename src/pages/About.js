import React, { useState } from 'react';
import Wrapper from '../components/UI/Wrapper';
import Header from '../components/header';

const About = () => {

    const [showContact, setShowContact] = useState(false);

    const open = () => { setShowContact(true) }
    const close = () => { setShowContact(false) }
    return (
        <>
            <Header open={open} />
            <Wrapper>
                Hello
            </Wrapper>
        </>

    )
}

export default About