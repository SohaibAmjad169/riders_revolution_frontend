import PropTypes from 'prop-types'

const Cartitems = ({ item, isService = false }) => {
  return (
    <li
      key={item?._id}
      className="flex justify-between items-center p-4 border-b"
    >
      <img
        src={isService ? item?.imageUrl : item?.bikeId?.imageUrl}
        alt={isService ? item?.name : item?.bikeId?.name}
        className="w-24 h-24 object-contain rounded"
      />
      <div className="ml-4 flex-1">
        <p className="font-semibold">
          {isService ? item?.name : item?.bikeId?.name}
        </p>
        <p className="text-gray-500">
          Rs.{item?.price} x {item?.quantity}
        </p>
        <p className="font-semibold">
          Total: Rs.{item?.price * item?.quantity}
        </p>
      </div>
    </li>
  )
}

Cartitems.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    quantity: PropTypes.number.isRequired,
    bikeId: PropTypes.shape({
      name: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  }).isRequired,
  isService: PropTypes.bool,
}

export default Cartitems
