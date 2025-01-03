import axios from 'axios'
import SDK from '../config'

/**
 * Create a new order by sending data to the backend.
 * @param {Object} orderData - The data required to create the order.
 * @param {function} setSuccess - Callback to set success message or state.
 * @param {function} setError - Callback to handle error messages.
 */
export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(
      `${SDK.BASE_URL}/Order/NewOrder`,
      { orderData }
    )
    if (response.status === 201) {
      alert(response.data.message) // Display success message
    }
    return response.data.OrderId // Return the new order ID
  } catch (error) {
    console.error(
      'Error creating order:',
      error.response?.data?.message || error.message
    )
    alert(error.response?.data?.message || 'Failed to create order.')
    console.log(error.response?.data?.message || 'Failed to create order.') // Display error message
  }
}
