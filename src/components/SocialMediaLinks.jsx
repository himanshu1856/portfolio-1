import React from 'react';

import InstagramIcon from '../assets/instagram.png'
import TwitterIcon from '../assets/twitter.png'
import LinkedinIcon from '../assets/linkedin.png'
import GmailIcon from '../assets/gmail.png'
import GithubIcon from '../assets/github.png'


const SocialMediaLinks = () => {
    return (
        <div className="bg-teal-800 p-2 h-40 w-full border-solid border-2 border-teal-200 mt-5 rounded-lg shadow-teal-400/50 shadow-2xl">
            <p className='mb-4 text-center font-semibold text-slate-200 text-xl uppercase underline underline-offset-8'>
                Let's Connect
            </p>
            <div className='flex flex-wrap justify-around lg:mt-5'>
                <a className='bg-slate-200 h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 flex justify-center items-center rounded-full'>
                    <img src={GithubIcon} className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12'></img>
                </a>
                <a className='bg-slate-200 h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 flex justify-center items-center rounded-full'>
                    <img src={LinkedinIcon} className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12'></img>
                </a>
                <a className='bg-slate-200 h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 flex justify-center items-center rounded-full'>
                    <img src={TwitterIcon} className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12'></img>
                </a>
                <a className='bg-slate-200 h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 flex justify-center items-center rounded-full'>
                    <img src={InstagramIcon} className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12'></img>
                </a>
                <a className='bg-slate-200 h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 flex justify-center items-center rounded-full'>
                    <img src={GmailIcon} className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12'></img>
                </a>
            </div>
        </div>
    );
}

export default SocialMediaLinks;
