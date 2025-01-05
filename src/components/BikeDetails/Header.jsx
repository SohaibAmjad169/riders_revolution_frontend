import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleFlag } from '../../../utils/Redux/Store/FlagSlice';
import { addBikeToCart } from '../../Functions/AddBikeToCart';
import AuthModal from '../Pages/Login';
import axios from 'axios';
import SDK from '../../config';
import { toast } from 'react-hot-toast';

const BikeHeader = ({ image, name, price, rating, _id, flag }) => {
  const User = useSelector((state) => state.Auth);
  const [quantity, setQuantity] = useState(1);
  const [bidAmount, setBidAmount] = useState('');
  const CartFlag = useSelector((state) => state.Flag);
  const dispatch = useDispatch();

  const [bids, setBids] = useState([]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const AddToCart = async () => {
    const success = await addBikeToCart(User.user._id, _id, quantity);
    if (success) {
      dispatch(ToggleFlag());
      console.log('Cart flag toggled:', CartFlag);
    }
  };

  const getTheBidsData = async () => {
    try {
      const data = await axios.get(`${SDK.BASE_URL}/Bid/GetAllBikeBids?bike_id=${_id}`);
      setBids(data.data.bids || []);
    } catch (error) {
      console.error('Error fetching bids:', error);
    }
  };

  useEffect(() => {
    getTheBidsData();
  }, []);

  const createBid = async () => {
    if (!bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
      toast.error('Please enter a valid bid amount');
      return;
    }

    const bikePrice = parseFloat(price);
    const minBid = bikePrice * 0.6;

    if (bidAmount < minBid) {
      toast.error('Price is too low!');
      return;
    }

    if (bidAmount > bikePrice) {
      toast.error('Add a valid price!.');
      return;
    }

    try {
      const response = await axios.post(`${SDK.BASE_URL}/Bid/createBid`, {
        bikeId: _id,
        userName: User.user.Name,
        userEmail: User.user.Email,
        bidAmount,
      });

      if (response.data.message === 'Bid created successfully.') {
        toast.success('Your bid has been placed successfully!');
        setBidAmount('');
        setBids((prevBids) => [
          ...prevBids,
          {
            userName: User.user.Name,
            userEmail: User.user.Email,
            bidAmount,
          },
        ]);
      } else {
        toast.error('There was an issue placing your bid.');
      }
    } catch (error) {
      console.error('Error creating bid:', error);
      toast.error('An error occurred while placing your bid. Please try again later.');
    }
  };

  return (
    <div className={`p-6 ${flag ? 'grid grid-cols-1 md:grid-cols-12 gap-6' : 'flex justify-center items-center'}`}>
      <div className={flag ? 'col-span-12 md:col-span-8' : 'w-[800px] '}>
        <div className="max-w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={image} alt={name} className="w-full h-64 object-contain" />
          <div className="p-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">{name}</h1>
              <div>
                <p className="text-lg font-semibold text-green-600">{price} PKR</p>
                <p className="text-sm text-gray-600">⭐⭐⭐⭐⭐ ({rating} Rating)</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center space-x-4">
                {User.user ? (
                  !flag ? (
                    <div className="flex items-center">
                      <button
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                        onClick={AddToCart}
                      >
                        Add to Cart
                      </button>
                      <button className="bg-gray-200 px-4 py-2 ml-4" onClick={increaseQuantity}>
                        +
                      </button>
                      <span className="px-4 py-2">{quantity}</span>
                      <button className="bg-gray-200 px-4 py-2" onClick={decreaseQuantity}>
                        -
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        className="rounded-lg bg-white text-black p-2 border-2 border-gray-400"
                        placeholder="Enter Your Bid"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                      />
                      <button
                        className="bg-blue-500 text-white rounded-lg p-2"
                        onClick={createBid}
                      >
                        Place Bid
                      </button>
                    </div>
                  )
                ) : (
                  <AuthModal />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {flag && (
        <div className="col-span-12 md:col-span-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">List of Bids</h2>
            <div className="h-[400px] overflow-y-auto">
              {bids.length > 0 ? (
                <ul className="space-y-4">
                  {bids.map((bid, index) => (
                    <li
                      key={index}
                      className="flex items-center bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-200"
                    >
                      <img
                        src={image}
                        alt="Bike"
                        className="w-16 h-16 object-contain rounded-lg border border-gray-200"
                      />
                      <div className="ml-4 flex-1">
                        <p className="text-lg font-semibold text-gray-800">
                          Name : {bid.userName}{' '}
                        </p>
                        <p className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-lg">
                          {bid.userEmail}
                        </p>
                        <p className="text-gray-600 mt-1">
                          <span className="font-bold text-green-600">Bid:</span> {bid.bidAmount} PKR
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-center">No bids available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

BikeHeader.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  flag: PropTypes.bool.isRequired,
};

export default BikeHeader;
