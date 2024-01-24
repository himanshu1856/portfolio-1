import './home.css'

import profile_photo from '../../assets/profile_photo.jpg';
import MultiColorTypeWriter from '../Typrewriter/typeWriter';

import InstagramIcon from '../../assets/instagram.png'
import TwitterIcon from '../../assets/twitter.png'
import LinkedinIcon from '../../assets/linkedin.png'
import GmailIcon from '../../assets/gmail.png'
import GithubIcon from '../../assets/github.png'

function Home() {
  return (
    <div className="bg-slate-800 h-screen bg-custom  px-4 md:px-10 lg:px-20">
      <HomeContainer/>
    </div>
  )
}

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

export default Home
