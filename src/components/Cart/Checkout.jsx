import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
const Checkout = ({ cartData }) => {
  const Router = useNavigate()
  return (
    <>
      <div className="p-4 border-t">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Total:</span>
          <span className="font-bold text-lg">
            Rs.{cartData?.totalPrice || 0}
          </span>
        </div>
      </div>
      <div className="p-4">
        <button
          onClick={() => Router('/Order')}
          className="bg-blue-500 text-white px-4 py-2 w-full"
        >
          Checkout
        </button>
      </div>
    </>
  )
}

export default Checkout
Checkout.propTypes = {
  cartData: PropTypes.shape({
    totalPrice: PropTypes.number.isRequired,
  }),
}
