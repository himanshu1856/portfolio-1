import Navbar from "../../components/Navbar"
import './home.css'
import HomeContainer from "../../components/HomeContainer"

function Home() {
  return (
    <div className="bg-slate-800 h-screen bg-custom  px-4 md:px-20">
      <Navbar/>
      <HomeContainer/>
    </div>
  )
}

export default Home
