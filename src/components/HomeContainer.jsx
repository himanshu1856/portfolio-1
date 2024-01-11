import React from 'react';
import profile_photo from '../assets/profile_photo.jpg';
import MultiColorTypeWriter from './MultiColorTypeWriter';
import SocialMediaLinks from './SocialMediaLinks';

const HomeContainer = () => {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row'>
        <div className='md:pt-5 lg:pr-20 w-full md:w-2/3 flex flex-col md:justify-start items-start mb-4 md:mb-0'>
            <p className='text-3xl md:text-3xl leading-loose font-mono h-14 md:h-10'>
                <MultiColorTypeWriter/>
            </p>
            <p className='text-gray-300 font-serif text-sm md:text-nm lg:text-xl lg:mt-5 tracking-widest'>
            A passionate <span className='text-gray-200 font-semibold'>Full Stack Web Developer</span> with a vibrant track record of 3+ years
            in crafting dynamic and user-friendly web solutions.
            </p>
            <SocialMediaLinks/>
        </div>
        <div className='md:p-7 w-full md:w-1/3 flex flex-col justify-center'>
            <div className='md:p-2 flex justify-center md:border-4 rounded-full border-solid border-teal-500 opacity-80'>
                <img src={profile_photo} alt='Profile photo' className='rounded-full w-48 md:w-full object-cover'/>
            </div>
            <p className='text-teal-300 text-center text-2xl tracking-widest'>Himanshu Sharma</p>
        </div>
    </div>
  );
}

export default HomeContainer;
