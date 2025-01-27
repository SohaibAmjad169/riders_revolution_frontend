import { useEffect } from 'react'
import FeaturesSection from './FeaturesSection'
import banner from '../../public/Banner.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <div className="mt-16">
        <div
          className="relative flex font-Poppins items-center h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
          data-aos="fade-up"
        >
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Hero Content */}
          <div
            className="relative z-10 font-Poppins text-white text-right max-w-screen-2xl px-4 md:px-20 ml-auto"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
          >
            <h1 className="text-xl md:text-5xl font-extrabold text-sky-500">
              Welcome to
            </h1>
            <p
              className="text-5xl font-extrabold md:text-9xl mt-4"
              data-aos="fade-left"
            >
              Riders
              <br />
              Revolution
            </p>
            <a href="/bike">
              <button
                className="btn btn-lg font-semibold relative bg-sky-500 text-white py-2 px-10 mt-6 hover:bg-sky-600"
                data-aos="zoom-in"
              >
                <span className="relative z-10">Explore</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      );

      <div data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-4xl font-Poppins font-bold text-grey-900 my-16 text-center">
          Why Choose
          <span className="relative font-Poppins inline-block ml-2">
            Riders Revolution?
            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400 -z-10"></span>
          </span>
        </h2>
        <FeaturesSection />
      </div>

      <span className="my-6">
        {' '}
        <br />
      </span>
      <div
        className="relative w-full h-[500px] md:h-[900px] bg-cover bg-center"
        style={{ backgroundImage: "url('./Bike Community.png')" }}
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute bottom-8 right-8 text-right font-Popins">
          <Link to="/news">
            <h2 className="text-4xl md:text-8xl tracking-wider font-Popins font-semibold text-white mb-4 ">
              Join The Community
            </h2>
            <p className="text-3xl md:text-4xl font-Popins text-white mb-6 ">
              Dive Into A Vibrant Community Of Riders.
            </p>
            <button className="px-6 py-3 bg-white md:text-xl  border-sky-500  text-sky-500 rounded hover:bg-sky-500 hover:text-white transition duration-300">
              JOIN NOW
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Banner
