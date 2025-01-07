import { useDispatch, useSelector } from "react-redux";
import { signoutUser } from "../../Functions/Signout";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { logout } from "../../../utils/Redux/Store/LoginSlice";
import { useState, useEffect, useRef } from "react";

function Logout() {
  const User = useSelector((state) => state.Auth);
  const Dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const userIconRef = useRef(null);

  const handleSignout = async () => {
    try {
      const response = await signoutUser();
      toast.success(response.message);
      Dispatch(logout());
      localStorage.removeItem("user");
      setIsDropdownOpen(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !userIconRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mt-1 me-4">
      {/* User Icon */}
      <div
        ref={userIconRef}
        className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white text-lg font-bold cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {User?.user?.Name ? User.user.Name[0].toUpperCase() : "U"}
      </div>


      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef} // Attach reference to the dropdown menu
          className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-4 px-4 border border-gray-200"
        >
          {/* User Name and Bottom Border */}
          <div className="flex items-center space-x-2 mb-3">
            <div
              ref={userIconRef}
              className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-lg font-bold cursor-pointer"
            >
              {User?.user?.Name ? User.user.Name[0].toUpperCase() : "U"}
            </div>
            <h1 className="ps-2 font-medium text-gray-800 text-sm flex-grow">
              {User?.user?.Name || "User"}
            </h1>
          </div>
          <hr />
          <div className="flex items-center space-x-2 my-3">
            <Link to="/sell-your-bike">
              <h1 className="font-medium text-gray-800 text-sm flex-grow">
                Sell Your Bike
              </h1>
            </Link>
          </div>
             <hr />
          <div className="flex items-center space-x-2 my-3">
            <Link to="/check-user-ads">
              <h1 className="font-medium text-gray-800 text-sm flex-grow">
                Check your Ad's
              </h1>
            </Link>
          </div>
          <hr />
           <div className="flex items-center space-x-2 my-3">
            <Link to="/wishlist">
              <h1 className="font-medium text-gray-800 text-sm flex-grow">
                Check Wishlist
              </h1>
            </Link>
          </div>
          <hr />
          {/* Logout Button */}
          <button
            className="w-full px-3 mt-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 text-sm font-medium"
            onClick={handleSignout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Logout;
