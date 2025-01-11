import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleFlag } from '../../../utils/Redux/Store/FlagSlice';
import { addBikeToCart } from '../../Functions/AddBikeToCart';
import AuthModal from '../Pages/Login';
import axios from 'axios';
import SDK from '../../config';
import { toast } from 'react-hot-toast';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const BikeHeader = ({ image, name, price, used, rating, _id, flag, bikeData }) => {
  const User = useSelector((state) => state.Auth);
  const [quantity, setQuantity] = useState(1);
  const [bidAmount, setBidAmount] = useState('');
  const CartFlag = useSelector((state) => state.Flag);
  const dispatch = useDispatch();

  const [bids, setBids] = useState([]);
  const [isWishlisted, setIsWishlisted] = useState(false);

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
      toast.error('Price is too low! Minimum amount is '+ minBid + ' PKR');
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

  const toggleWishlist = async () => {
    setIsWishlisted(!isWishlisted);

    try {
      const response = await axios.post(`${SDK.BASE_URL}/Wishlist/createWishlist`, {
        bikeId: _id,
        userName: User.user.Name,
        userEmail: User.user.Email,
        bikeImage: image,
        bikeName:bikeData.name,
        bikeUsed:bikeData.Used,
        bikePrice:bikeData.price,
        bikeRating:bikeData.rating
      });

      if (response.data.message === 'wishlist created successfully.') {
        toast.success(isWishlisted ? 'Bike removed from wishlist' : 'Bike added to wishlist');
      } else {
        toast.error('There was an issue updating the wishlist');
      }
    } catch (error) {
      console.error('Error updating wishlist:', error);
      toast.error('An error occurred while updating your wishlist. Please try again.');
    }
  };


  return (
    <div className={`p-6 ${flag ? 'grid grid-cols-1 md:grid-cols-12 gap-6' : 'flex justify-center items-center'}`}>
      <div className={flag ? 'col-span-12 md:col-span-8' : 'w-[800px] '}>
        <div className="max-w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={`${SDK.IMAGES_URL}/${image}`} alt={name} className="w-full h-64 object-contain" />
          <div className="p-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">{name}</h1>
              <div>
                <p className="text-lg font-semibold text-green-600">{price} PKR</p>
                
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center space-x-4">
                {User.user ? (
                  !flag ? (
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                      
                        <button
                          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                          onClick={AddToCart}
                        >
                          Add to Cart
                        </button>
                        <button
                          className="bg-gray-200 px-4 py-2 ml-4"
                          onClick={increaseQuantity}
                        >
                          +
                        </button>
                        <span className="px-4 py-2">{quantity}</span>
                        <button
                          className="bg-gray-200 px-4 py-2"
                          onClick={decreaseQuantity}
                        >
                          -
                        </button>
                      </div>
                      
                      <div className="ml-auto flex items-center">
                        <button onClick={toggleWishlist} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          {isWishlisted ? (
                            <FaHeart className="text-red-500 text-2xl" />
                          ) : (
                            <FaRegHeart className="text-gray-500 text-2xl" />
                          )}
                          Wishlist
                          </span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 w-full">
                      <input
                        type="number"
                        className="rounded-lg bg-white text-black p-2 border-2 border-gray-400"
                        placeholder="Enter Your Bid"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                      />
                      <button
                        type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                        onClick={createBid}
                      >
                        Place Bid
                      </button>
                      
                      <div className="ml-auto flex items-center">
                        <button onClick={toggleWishlist} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
{isWishlisted ? (
                            <FaHeart className="text-red-500 text-2xl" />
                          ) : (
                            <FaRegHeart className="text-gray-500 text-2xl" />
                          )}
                          Wishlist
</span>
                          
                        </button>
                      </div>

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
          <div className="bg-blue-100 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">List of Bids</h2>
            <div className="h-[400px] overflow-y-auto">
              {bids.length > 0 ? (
                <ul class="mt-8 mx-auto max-w-xs text-left font-medium text-lg leading-none border-blue-200 divide-y divide-blue-200">
                  {bids.map((bid, index) => (
                    <li
                      key={index}
                      class="py-3.5 w-full flex items-center text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                    >
                      <span class="ml-5 mr-2.5 w-1 h-16 bg-blue-500 rounded-r-md"></span>
                      <img
                        src={`${SDK.IMAGES_URL}/${image}`}
                        alt="Bike"
                        className="w-16 h-16 object-contain rounded-lg border border-gray-200"
                      />
                      <div className="ml-4 flex-1">
                        <p className="text-lg font-semibold text-gray-800">
                          Name : {bid.userName}{' '}
                        </p>
                        <p className="bg-white text-blue-600 text-xs font-medium px-2 py-1 rounded-lg">
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
