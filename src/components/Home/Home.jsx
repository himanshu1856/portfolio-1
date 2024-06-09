import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './home.css'

function Home() {
    return (
        <div className='py-2 px-3 md:p-5  h-screen background-pattern'>
            <div className='flex justify-center h-10 md:h-1/6'>
                <Navbar/>
            </div>
            <div className='h-5/6 mt-8 md:mt-0'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Home