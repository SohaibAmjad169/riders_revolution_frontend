import Navbar from '../components/Navbar'
import Bike from '../components/Bikes'
import Footer from '../components/Footer'
function Bikes() {
  return (
    <>
     <Navbar/>
      <div className=" min-h-screen">
        <Bike />
      </div>
      <Footer />
    </>
  )
}

export default Bikes
