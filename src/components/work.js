import React from 'react';
import Project from './project';

const Work = () => {
    return (
        <div className="py-10 px-32 flex flex-col">
            <h1 className="text-4xl mb-5 text-black font-header font-bold">Personal Projects</h1>
            <div className='grid grid-cols-2 w-full'>
                <Project type='agileBoard' />
                <Project type='portfolio' />
                <Project type='covid' />
            </div>
        </div>
    );
};

export default Work;
