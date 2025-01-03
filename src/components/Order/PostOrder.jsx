import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleOrder } from '../../Functions/GetOrder'
import { emptyCart } from '../../Functions/EmptyCart' // Import the empty cart function
import { useDispatch, useSelector } from 'react-redux'
import { ToggleFlag } from '../../../utils/Redux/Store/FlagSlice'

const Checkout = () => {
  const [orderData, setOrderData] = useState(null)
  const [cartData, setCartData] = useState(null)
  const { id } = useParams()
  const User = useSelector((state) => state.Auth)
  const Dispatch = useDispatch()
  const getData = async () => {
    try {
      const data = await fetchSingleOrder(id)
      if (data) {
        setOrderData(data.Order)
        setCartData(data.Cart)

        // Empty the cart after successfully fetching data
        await emptyCart(User.user._id)
      }
    } catch (error) {
      console.error('Error fetching order data:', error)
    }
  }

  useEffect(() => {
    getData()
    Dispatch(ToggleFlag())
  }, [])

  if (!orderData || !cartData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-gray-500">
          Loading order details...
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-20">
      {/* Order Summary */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Order Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-700">Name</h3>
            <p>{orderData.Name}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Email</h3>
            <p>{orderData.Email}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Shipping Address</h3>
            <p>
              {orderData.ShippingAddress.street},{' '}
              {orderData.ShippingAddress.city},{' '}
              {orderData.ShippingAddress.state},{' '}
              {orderData.ShippingAddress.postalCode},{' '}
              {orderData.ShippingAddress.country}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Total Amount</h3>
            <p>PKR {orderData.TotalAmount.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Cart Details */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Items</h2>

        {/* Bikes */}
        <div className="mb-6">
          {orderData.bikes.length > 0 ? (
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Bikes</h3>
          ) : (
            ''
          )}
          <div className="grid grid-cols-1 gap-6">
            {orderData.bikes.map((bike) => (
              <div
                key={bike.bikeId._id}
                className="border border-black rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={bike.imageUrl}
                  alt={bike.name}
                  className="w-full h-40 object-contain"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-700 text-lg">
                    {bike.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Price:{' '}
                    <span className="font-medium">
                      PKR {bike.price.toLocaleString()}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Quantity:{' '}
                    <span className="font-medium">{bike.quantity}</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Subtotal:{' '}
                    <span className="font-medium">
                      PKR {(bike.price * bike.quantity).toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-6">
          {orderData.services.length > 0 ? (
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Services
            </h3>
          ) : (
            ''
          )}
          <div className="grid grid-cols-1 gap-6">
            {orderData.services.map((service) => (
              <div
                key={service.serviceId._id}
                className="border border-black rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-40 object-contain"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-700 text-lg">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Price:{' '}
                    <span className="font-medium">
                      PKR {service.price.toLocaleString()}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Quantity:{' '}
                    <span className="font-medium">{service.quantity}</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Subtotal:{' '}
                    <span className="font-medium">
                      PKR {(service.price * service.quantity).toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grand Total */}
        <div className="flex justify-between items-center mt-8 border-t pt-4">
          <span className="font-bold text-lg">Grand Total:</span>
          <span className="font-bold text-lg text-indigo-600">
            PKR {orderData.TotalAmount.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Checkout
