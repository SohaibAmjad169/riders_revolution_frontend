import { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Bikes() {
  const [bike, setbike] = useState([])
  useEffect(() => {
    const getbike = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/bike`)
        console.log(res.data)
        setbike(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getbike()
  }, [])
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            All Bikes <span className="text-sky-500"> Here! :)</span>
          </h1>
          <Link to="/">
            <button className="mt-6 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-700 duration-300">
              Back
            </button>
          </Link>
          <button className="mt-6 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-700 duration-300">
            Sell your bike
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {bike.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Bikes
