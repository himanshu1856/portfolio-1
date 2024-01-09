import React from 'react'
import profile_photo from '../assets/profile_photo.jpg'
import MultiColorTypeWriter from './MultiColorTypeWriter'

const HomeContainer = () => {
  return (
    <div className='w-full flex px-20'>
        <div className='w-2/3 flext'>
            <p className='text-5xl leading-loose opacity-70'>
                <MultiColorTypeWriter/>
            </p>
        </div>
        <div className='w-1/3'>
            <div className='border-4 rounded-full border-solid border-sky-500 p-2 opacity-80'>
                <img src={profile_photo} alt='profile photo' className='rounded-full w-62 h-62 object-cover fadeIn'/>
            </div>
        </div>
    </div>
  )
}

export default HomeContainer