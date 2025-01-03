import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FetchBikes } from '../Functions/GetAllBikes'
import Spinner from './loader/Spinner'

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
    <div className="text-center p-6 bg-white mt-12">
      <h1 className="text-3xl font-bold my-10 text-gray-800">Featured Bikes</h1>

      {/* Show spinner when loading */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {AllBikes.map((bike) => (
            <div
              key={bike.id}
              onClick={() => navigate(`/bike/${bike._id}`)}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={bike.imageUrl}
                alt={bike.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">{bike.name}</h3>
              <div className="text-yellow-400 my-2">
                {'★'.repeat(Math.floor(bike.rating))}
                {'☆'.repeat(5 - Math.floor(bike.rating))}
              </div>
              <p className="text-lg font-medium text-gray-800">Rs {bike.price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Check Out
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FeaturedBikes
