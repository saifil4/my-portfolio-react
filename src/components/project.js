import React from 'react';
import agileBoardImg from '../assets/images/agile-board/poster-image.svg';
import portfolioImg from '../assets/images/portfolio/poster-image.svg';
import covidTrackerImg from '../assets/images/covid-tracker/poster-image.svg';
import { FiArrowRight } from 'react-icons/fi'

const projects = {
    agileBoard: {
        name: 'Agile Board',
        image: agileBoardImg,
        skills: ['HTML', 'CSS', 'Javascript']
    },
    portfolio: {
        name: 'Portfolio Website',
        image: portfolioImg,
        skills: ['HTML', 'CSS', 'Javascript']
    },
    covid: {
        name: 'Covid Tracker',
        image: covidTrackerImg,
        skills: ['HTML', 'CSS', 'Javascript']
    }
}

const Project = ({ type }) => {
    console.log(type)
    return (
        <div className='pt-5 pr-5 pb-5 w-100'>
            <div className='text-left'>
                <img className='w-100' src={projects[type].image} />
            </div>
            <div className=''>
                <div className='mt-3'>
                    {
                        projects[type].skills.map(skill => (
                            <span className='text-slate-500 font-medium mr-3'>{skill}</span>
                        ))
                    }
                </div>
                <h2 className='font-semibold text-2xl mt-2'>{projects[type].name}</h2>
                <p className='text-slate-500 my-2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                <a className='flex items-center text-md font-medium underline underline-offset-8 text-blue-700'>Learn more<FiArrowRight className='ml-2' /></a>
            </div>
        </div>
    )
}

export default Project