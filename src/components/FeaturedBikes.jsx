import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FetchBikes } from '../Functions/GetAllBikes'
import Spinner from './loader/Spinner'
import SDK from '../config'

const FeaturedBikes = () => {
  const navigate = useNavigate()
  const [AllBikes, SetBikes] = useState([])
  const [loading, setLoading] = useState(true) 

  const GetAllBikes = async () => {
    setLoading(true) 
    const Data = await FetchBikes()
    if (Data) {
      SetBikes(Data)
      setLoading(false) 
    }
  }

  useEffect(() => {
    GetAllBikes()
  }, [])

  return (
    <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-white mt-12">
  <h1 className="text-4xl font-extrabold my-10 text-gray-900">Featured Bikes</h1>

  {/* Show spinner when loading */}
  {loading ? (
    <Spinner />
  ) : (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {AllBikes.map((bike) => (
        <div
          key={bike.id}
          onClick={() => navigate(`/bike/${bike._id}`)}
          className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-2xl"
        >
          <div className="relative">
            <img
              src={`${SDK.IMAGES_URL}/${bike.image}`}
              alt={bike.name}
              className="w-full h-48 object-cover"
            />
            {!bike.Used ? (
  <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold py-1 px-2 rounded-full">
    New
  </span>
) : (
  <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold py-1 px-2 rounded-full">
    Used
  </span>
)}

              
             
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{bike.name}</h3>

            <div className="text-yellow-500 mb-4">{bike.starting}
              
            </div>

            <p className="text-xl font-semibold text-gray-700 mb-4">
              Rs {bike.price.toLocaleString()}
            </p>

            <button
              className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

  )
}

export default FeaturedBikes
