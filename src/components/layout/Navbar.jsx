import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../Pages/Logout";
import CartSidebar from "../CartSidebar";
import AuthModal from "../Pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../../utils/Redux/Store/LoginSlice";

function Navbar() {
  const User = useSelector((state) => state.Auth);
  const [sticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const Dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      Dispatch(loginSuccess(JSON.parse(storedUser)));
    }
  }, [Dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link className="font-Popins font-extrabold hover:text-blue-500" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-Popins font-extrabold hover:text-blue-500" to="/aboutUs">
          About Us
        </Link>
      </li>
      <li>
        <Link className="font-Popins font-extrabold hover:text-blue-500" to="/bike">
          Marketplace
        </Link>
      </li>
      <li>
        <Link className="font-Popins font-extrabold hover:text-blue-500" to="/news">
          Community News
        </Link>
      </li>
      <li>
        <Link className="font-Popins font-extrabold hover:text-blue-500" to="/services">
          Services
        </Link>
      </li>
      <li>
        <Link className="font-Popins font-extrabold hover:text-blue-500" to="/contactUs">
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`container mx-auto px-4 md:px-20 fixed top-0 left-0 right-0 z-50 ${
        sticky ? "bg-white shadow-md transition duration-300" : "bg-transparent"
      }`}
    >
      <div className="navbar flex items-center justify-between py-3">
        {/* Logo */}
        <div className="navbar-start flex items-center">
          <Link className="text-2xl font-bold" to="/">
            <img src="./Logo-black.png" alt="Logo" width={50} />
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-2 text-gray-600">{navItems}</ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end flex items-center space-x-4">
          {User.isLoggedIn ? (
            <>
              <Logout />
              <div className="pl-4">
                <CartSidebar />
              </div>
            </>
          ) : (
            <AuthModal />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md rounded-lg mt-2 p-4">
          <ul className="space-y-4">{navItems}</ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
