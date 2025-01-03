import axios from 'axios'
import SDK from '../config'


export const addServiceToCart = async (userId, ServiceId, quantity) => {
  try {
    const response = await axios.post(
      `${SDK.BASE_URL}/Service/AddserviceToCart`, // Replace with your actual backend endpoint
      {
        userId,
        ServiceId,
        quantity,
      }
    )

    if (response.status === 200) {
      console.log('Service added to cart:', response.data.cart)
      return response.data.cart // Return updated cart data
    } else {
      console.error('Failed to add service to cart:', response.data)
      throw new Error(response.data.error || 'Failed to add service to cart')
    }
  } catch (error) {
    console.error('Error adding service to cart:', error.message)
    throw new Error(error.message)
  }
}
