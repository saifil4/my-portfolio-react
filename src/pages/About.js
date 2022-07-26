import React, { useState } from 'react';
import Wrapper from '../components/ui/Wrapper';
import AppNav from '../components/nav';
import saifil from '../assets/images/saifil.jpg'

const About = () => {

    const [showContact, setShowContact] = useState(false);

    const open = () => { setShowContact(true) }
    const close = () => { setShowContact(false) }
    return (
        <>
            <AppNav open={open} />
            <Wrapper>
                <div className='grid grid-cols-6 col mt-5 px-32 gap-5'>
                    <div className='col-span-4'>
                        <h1 className='text-6xl font-header font-bold text-theme-blue'>
                           About me
                        </h1>
                        <p className='mt-5'>
                            Currently, I am working for a company called Webisoft as a Software Developer for over
                            a year. Here, so far I have delivered 3 solo projects where I was responsible for front-end
                            development and communicating requirements with clients, designers and backend
                            developers. I also helped deliver 4 other projects collaborating with my teammates. In
                            these projects I worked with several technologies, frameworks and libraries including
                            React, Electron, PHP, Laravel etc. while maintaining a good code quality.
                            In my previous role, I worked on a SaaS platform, building, and delivering features like
                            interactive dashboards for varied users while working in an agile environment. I worked
                            in Angular during 2.5 years of my tenure.
                        </p>

                    </div>
                    <div className='col-span-2'>
                        <img src={saifil}/>
                        <h6 className='text-xl font-bold text-theme-blue'>Experience</h6>
                        <p className='text-lg font-bold mt-2'>Software Developer</p>
                        <p className=' italic'>Webisoft, April 2021 to Present</p>

                        <p className='text-lg font-bold mt-2'>Solution Developer</p>
                        <p className='italic'>BPM-D, April 2019 to November 2019</p>
                    </div>
                </div>

            </Wrapper>
        </>

    )
}

export default About