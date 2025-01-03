import axios from 'axios'
import SDK from '../config'

export const GetSingleBike = async (id) => {
  try {
    const Response = await axios.get(
      `${SDK.BASE_URL}/Bike/GetSingleBike?ID=${id}`
    )
    if (Response.status === 200) {
      console.log('Single Bike:', Response.data.bike)
      return Response.data.bike
    }
  } catch (error) {
    console.error('ERROR GETTING SINGLE BIKE:', error.message)
  }
  return null 
}
