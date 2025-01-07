import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GetSingleBike } from '../Functions/GetBike'
import BikeHeader from './BikeDetails/Header'
import QuestionsAccordion from './BikeDetails/QuestionAccordion'
import BikeData from './BikeDetails/BikeData'
import Spinner from './loader/Spinner'
const BikeDetailsPage = () => {
  const { id } = useParams() 
  const [Bike, SetBike] = useState(null) 
  const [Loading, SetLoading] = useState(true)
  const [Error, SetError] = useState(false) 
  
  const SingleBike = async () => {
    const BikeData = await GetSingleBike(id)
    if (BikeData) {
      SetBike(BikeData)
      SetLoading(false)
    } else {
      SetError(true)
      SetLoading(false)
    }
  }

  useEffect(() => {
    SingleBike()
  }, [id]) 

  return (
    <>
      {Loading ? (
        <Spinner />
      ) : (
        <div className="p-6 bg-gray-100 min-h-screen my-20">
          <BikeHeader
            flag={Bike.Used}
            _id={Bike._id}
            image={Bike.image}
            name={Bike.name}
            price={Bike.price}
            rating={Bike.rating}
            bikeData={Bike} 
          />
          {/* Add additional details here */}
          <BikeData bikeData={Bike} />
          <QuestionsAccordion questions={Bike.questions} />
        </div>
      )}
    </>
  )
}

export default BikeDetailsPage
