import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
function Root() {
    return (
        <div className='bg-slate-800'>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default Root