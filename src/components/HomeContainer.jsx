import React from 'react';
import profile_photo from '../assets/profile_photo.jpg';
import MultiColorTypeWriter from './MultiColorTypeWriter';
import SocialMediaLinks from './SocialMediaLinks';

const HomeContainer = () => {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row fadeIn'>
        <div className='lg:pt-5 lg:pr-20 w-full md:w-2/3 flex flex-col md:justify-start items-start mb-4 md:mb-0'>
            <p className='text-3xl md:text-3xl leading-loose font-mono h-10'>
                <MultiColorTypeWriter/>
            </p>
            <p className='text-gray-300 font-serif text-xl lg:mt-3 tracking-widest h-20'>
            A passionate <span className='text-gray-200 font-semibold'>Full Stack Web Developer</span> with a vibrant track record of 3+ years
            in crafting dynamic and user-friendly web solutions.
            </p>
            <SocialMediaLinks/>
        </div>
        <div className='lg:pt-5 w-full md:w-1/3 flex flex-col justify-center mb-4 md:mb-0'>
            <div className=' lg:h-4/5 border-4 rounded-full border-solid border-teal-500 p-2 opacity-80'>
                <img src={profile_photo} alt='Profile photo' className='rounded-full w-48 h-48 md:w-full md:h-full object-cover'/>
            </div>
            <p className='lg:h-1/3 text-teal-300 text-center text-4xl tracking-widest'>Himanshu Sharma</p>
        </div>
    </div>
  );
}

export default HomeContainer;
