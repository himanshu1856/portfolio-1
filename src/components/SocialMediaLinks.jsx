import React from 'react';

import InstagramIcon from '../assets/instagram.png'
import TwitterIcon from '../assets/twitter.png'
import LinkedinIcon from '../assets/linkedin.png'
import GmailIcon from '../assets/gmail.png'
import GithubIcon from '../assets/github.png'


const SocialMediaLinks = () => {
    return (
        <div className="bg-teal-800 lg:p-2 h-40 w-full border-solid border-2 border-teal-200 lg:mt-5 rounded-lg shadow-teal-400/50 shadow-2xl">
            <p className='text-center font-semibold text-slate-200 text-xl uppercase underline underline-offset-8'>
                Let's Connect
            </p>
            <div className='flex justify-around lg:mt-5'>
                <a className='bg-slate-200 h-20 w-20 flex justify-center items-center rounded-full'>
                    <img src={GithubIcon} className='h-12 w-12'></img>
                </a>
                <a className='bg-slate-200 h-20 w-20 flex justify-center items-center rounded-full'>
                    <img src={LinkedinIcon} className='h-12 w-12'></img>
                </a>
                <a className='bg-slate-200 h-20 w-20 flex justify-center items-center rounded-full'>
                    <img src={TwitterIcon} className='h-12 w-12'></img>
                </a>
                <a className='bg-slate-200 h-20 w-20 flex justify-center items-center rounded-full'>
                    <img src={InstagramIcon} className='h-12 w-12'></img>
                </a>
                <a className='bg-slate-200 h-20 w-20 flex justify-center items-center rounded-full'>
                    <img src={GmailIcon} className='h-12 w-12'></img>
                </a>
            </div>
        </div>
    );
}

export default SocialMediaLinks;
