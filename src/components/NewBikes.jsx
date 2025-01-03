import { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { FetchBikes } from '../Functions/GetAllBikes'
import { useNavigate } from 'react-router-dom'

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
          <div key={bike._id} className="p-4">
            <div
              onClick={() => navigate(`/bike/${bike._id}`)}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={bike.imageUrl}
                alt={bike.name}
                className="w-full h-56 object-contain rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {bike.name}
              </h3>
              <div className="text-yellow-400 my-2">
                {'★'.repeat(Math.floor(bike.rating)) +
                  '☆'.repeat(5 - Math.floor(bike.rating))}
              </div>
              <p className="text-lg font-medium text-gray-800">
                Rs {bike.price.toLocaleString()}
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Check Out
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default NewBikes
