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
        <Link className="glowing-btn relative text-glow-color font-raleway text-xs font-extrabold tracking-widest cursor-pointer px-4 py-2 border-2 border-glow-color rounded-lg bg-transparent hover:text-black hover:bg-white transition-transform duration-300 shadow-glow-btn hover:shadow-glow-hover focus:shadow-glow-hover focus:text-black focus:bg-white" to="/">
        <span className="glowing-txt relative inline-block text-center text-glow">
        Home
      </span>
        </Link>
      </li>
      <li>
        <Link className="glowing-btn relative text-glow-color font-raleway text-xs font-extrabold tracking-widest cursor-pointer px-4 py-2 border-2 border-glow-color rounded-lg bg-transparent hover:text-black hover:bg-white transition-transform duration-300 shadow-glow-btn hover:shadow-glow-hover focus:shadow-glow-hover focus:text-black focus:bg-white" to="/aboutUs">
        <span className="glowing-txt relative inline-block text-center text-glow">
        About Us
      </span>
        </Link>
      </li>
      <li>
        <Link className="glowing-btn relative text-glow-color font-raleway text-xs font-extrabold tracking-widest cursor-pointer px-4 py-2 border-2 border-glow-color rounded-lg bg-transparent hover:text-black hover:bg-white transition-transform duration-300 shadow-glow-btn hover:shadow-glow-hover focus:shadow-glow-hover focus:text-black focus:bg-white" to="/bike">
        <span className="glowing-txt relative inline-block text-center text-glow">
        Marketplace
      </span>
        </Link>
      </li>
      <li>
        <Link className="glowing-btn relative text-glow-color font-raleway text-xs font-extrabold tracking-widest cursor-pointer px-4 py-2 border-2 border-glow-color rounded-lg bg-transparent hover:text-black hover:bg-white transition-transform duration-300 shadow-glow-btn hover:shadow-glow-hover focus:shadow-glow-hover focus:text-black focus:bg-white" to="/news">
        <span className="glowing-txt relative inline-block text-center text-glow">
        Community News
      </span>
        </Link>
      </li>
      <li>
        <Link className="glowing-btn relative text-glow-color font-raleway text-xs font-extrabold tracking-widest cursor-pointer px-4 py-2 border-2 border-glow-color rounded-lg bg-transparent hover:text-black hover:bg-white transition-transform duration-300 shadow-glow-btn hover:shadow-glow-hover focus:shadow-glow-hover focus:text-black focus:bg-white" to="/services">
        <span className="glowing-txt relative inline-block text-center text-glow">
        Services
      </span>
        </Link>
      </li>
      <li>
        <Link className="glowing-btn relative text-glow-color font-raleway text-xs font-extrabold tracking-widest cursor-pointer px-4 py-2 border-2 border-glow-color rounded-lg bg-transparent hover:text-black hover:bg-white transition-transform duration-300 shadow-glow-btn hover:shadow-glow-hover focus:shadow-glow-hover focus:text-black focus:bg-white" to="/contactUs">
        <span className="glowing-txt relative inline-block text-center text-glow">
        Contact Us
      </span>
        </Link>
      </li>
    </>
  );

  return (
    <div
      className="bg-black container mx-auto px-4 md:px-20 fixed top-0 left-0 right-0 z-50 height-100px"
    >
      <div className="navbar flex items-center justify-between py-3">
        {/* Logo */}
        <div className="navbar-start flex items-center">
          <Link className="text-2xl font-bold" to="/">
            <img src="./Logo.png" alt="Logo" width={50} />
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
