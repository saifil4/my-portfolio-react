import React from 'react';
import Project from './project';

const Work = () => {
    return (
        <div className="py-10 md:px-32 flex flex-col px-5">
            <h1 className="text-4xl mb-5 text-black font-header font-bold">Personal Projects</h1>
            <div className='grid grid-cols-1 w-full md:grid-cols-3'>
                <Project type='agileBoard' />
                <Project type='portfolio' />
                <Project type='covid' />
                <Project type='covid' />
                <Project type='covid' />
                <Project type='covid' />
            </div>
        </div>
    );
}

export default Work;
