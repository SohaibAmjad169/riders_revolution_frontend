import axios from 'axios'
import SDK from '../config'

export const addBikeToCart = async (userId, bikeId, quantity) => {
  try {
    const response = await axios.post(
      `${SDK.BASE_URL}/Cart/AddToCart`,
      {
        userId,
        bikeId,
        quantity,
      }
    )

    if (response.status === 200) {
      const updatedCart = response.data.cart

      // Save updated cart to local storage
      localStorage.setItem('cart', JSON.stringify(updatedCart))

      alert('Bike added to cart successfully!')
      return true
    }
  } catch (error) {
    console.error(error)
    console.log(error.response?.data?.error || 'Failed to add bike to cart.')

    // If API fails, try to save to local storage as a fallback
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const newCartItem = { bikeId, quantity }

    // Check if the item already exists
    const existingItemIndex = cart.findIndex((item) => item.bikeId === bikeId)
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity // Update quantity
    } else {
      cart.push(newCartItem) // Add new item
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    alert('Bike added to cart (local storage fallback).')
  }
}
