import { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { FetchBikes } from '../Functions/GetAllBikes'
import { useNavigate } from 'react-router-dom'
import SDK from '../config'

function NewBikes() {
  const navigate = useNavigate()
  const [AllBikes, SetBikes] = useState([])

  const GetAllBikes = async () => {
    const Data = await FetchBikes()
    if (Data) {
      SetBikes(Data)
    }
  }

  useEffect(() => {
    GetAllBikes()
  }, [])

  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
      <div className="text-center my-16">
        <h2 className="text-4xl font-extrabold font-Popins text-gray-900">
          Trending{' '}
          <span className="relative inline-block font-Popins text-blue-500">
            Today
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 -z-10"></span>
          </span>
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Discover the most popular bikes our customers are loving right now.
        </p>
      </div>

      <Slider {...settings} className="mx-2">
      {AllBikes.map((bike) => (
    <div
      key={bike.id}
      onClick={() => navigate(`/bike/${bike._id}`)}
      className="p-4 bg-white scale-90 shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-2xl"
    >
      <div className="relative">
        <img
          src={`${SDK.IMAGES_URL}/${bike.image}`}
          alt={bike.name}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold py-1 px-2 rounded-full">
          {bike.Used ? 'Used' : 'New'}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{bike.name}</h3>

        <div className="text-yellow-500 mb-2">
          {bike.starting}
        </div>

        <p className="text-lg font-semibold text-gray-700 mb-2">
          Rs {bike.price.toLocaleString()}
        </p>

        <button
          className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  ))}
</Slider>
    </div>
  )
}

export default NewBikes

