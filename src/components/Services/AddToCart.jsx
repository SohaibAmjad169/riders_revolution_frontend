import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToggleFlag } from '../../../utils/Redux/Store/FlagSlice'
import PropTypes from 'prop-types'
import AuthModal from '../Pages/Login'
import { addServiceToCart } from '../../Functions/AddServiceToCart'
const AddToCart = ({ _id }) => {
  const User = useSelector((state) => state.Auth)
  const [quantity, setQuantity] = useState(1)
  const CartFlag = useSelector((state) => state.Flag)
  const dispatch = useDispatch()

  const increaseQuantity = () => setQuantity(quantity + 1)
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1)

  // Add Bike to Cart
  const AddToCart = async () => {
    const success = await addServiceToCart(User.user._id, _id, quantity)
    if (success) {
      dispatch(ToggleFlag())
      console.log('Cart flag toggled:', CartFlag)
    }
  }

  return (
    <div className="flex items-center space-x-4">
      {User.user ? (
        <div className=" flex flex-col items-center justify-center mx-auto gap-2 py-2">
          <div className="flex items-center">
            <button
              className="bg-gray-200 px-4 py-2"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button
              className="bg-gray-200 px-4 py-2"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            onClick={AddToCart}
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <AuthModal />
      )}
    </div>
  )
}

export default AddToCart
AddToCart.propTypes = {
  _id: PropTypes.string.isRequired,
}
