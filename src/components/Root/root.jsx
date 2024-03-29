import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './root.css'

function Root() {
    return (
        <div className='p-5  h-screen background-pattern'>
            <div className='flex justify-center h-1/6'>
                <Navbar/>
            </div>
            <div className='h-5/6'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Root