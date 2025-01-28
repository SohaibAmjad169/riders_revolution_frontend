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

<<<<<<< HEAD
=======
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
>>>>>>> e2b2b495d8ab9b9551617dbb55f76932303b0a0b

  
  return (
<<<<<<< HEAD
    <div className={`navbar w-[100%] ${sticky ? "fixed top-0 shadow-md" : "relative"} bg-black z-[500] px-4 sm:px-6 lg:px-8 flex items-center h-24 text-navy font-medium text-sm`}>

      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 ">
        <nav aria-label="Logo menu" class="relative z-[60] flex w-auto h-10">
    <img src="./Logo.png" alt="Logo" href="/" />
    
  </nav>
=======
    <div
      className="bg-black container mx-auto px-4 md:px-20 fixed top-0 left-0 right-0 z-50 height-100px"
    >
      <div className="navbar flex items-center justify-between py-3">
        {/* Logo */}
        <div className="navbar-start flex items-center">
          <Link className="text-2xl font-bold" to="/">
            <img src="./Logo.png" alt="Logo" width={50} />
          </Link>
>>>>>>> e2b2b495d8ab9b9551617dbb55f76932303b0a0b
          {/* Mobile Menu Button */}
          <button
          className="xl:hidden flex items-center text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden bg-black transition-transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} absolute top-16 left-0 w-full shadow-md`}>
        <ul className="text-white text-center py-4 space-y-4">
          <li><Link to="/" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/aboutUs" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/bike" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Marketplace</Link></li>
          <li><Link to="/news" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Community News</Link></li>
          <li><Link to="/services" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
          <li><Link to="/contactUs" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      

  
        </div>

        <div class="hidden xl:flex items-center absolute left-1/2 -translate-x-1/2 rounded-full bg-white/75 bg-gradient-to-r from-blue-900/60 via-sky-400/50 to-indigo-200/40 border border-white/50 px-3 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-800/[.075] backdrop-blur-xl">
        <a class="flex-none group relative block transition duration-300 px-3 py-2.5 hover:text-sky-200" href="/">
        Home
        <span class="absolute inset-x-1 h-px bg-gradient-to-r from-violet-500/0 from-10% via-violet-400 to-violet-500/0 to-90% transition duration-300 -bottom-0.5 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100">
        </span>
        <span class="overflow-hidden absolute inset-0 transition origin-bottom duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
          <span class="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-violet-500/20 to-transparent blur rounded-t-full">
          </span>
        </span>
      </a>
      <a class="flex-none group relative block transition duration-300 px-3 py-2.5 hover:text-sky-200" href="/aboutUs">
        About us
        <span class="absolute inset-x-1 h-px bg-gradient-to-r from-violet-500/0 from-10% via-violet-400 to-violet-500/0 to-90% transition duration-300 -bottom-0.5 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100">
        </span>
        <span class="overflow-hidden absolute inset-0 transition origin-bottom duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
          <span class="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-violet-500/20 to-transparent blur rounded-t-full">
          </span>
        </span>
      </a>
      <a class="flex-none group relative block transition duration-300 px-3 py-2.5 hover:text-sky-200" href="/bike">
        Marketplace
        <span class="absolute inset-x-1 h-px bg-gradient-to-r from-violet-500/0 from-10% via-violet-400 to-violet-500/0 to-90% transition duration-300 -bottom-0.5 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100">
        </span>
        <span class="overflow-hidden absolute inset-0 transition origin-bottom duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
          <span class="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-violet-500/20 to-transparent blur rounded-t-full">
          </span>
        </span>
      </a>
      <a class="flex-none group relative block transition duration-300 px-3 py-2.5 hover:text-sky-200" href="/news">
        Community News
        <span class="absolute inset-x-1 h-px bg-gradient-to-r from-violet-500/0 from-10% via-violet-400 to-violet-500/0 to-90% transition duration-300 -bottom-0.5 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100">
        </span>
        <span class="overflow-hidden absolute inset-0 transition origin-bottom duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
          <span class="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-violet-500/20 to-transparent blur rounded-t-full">
          </span>
        </span>
      </a>
      <a class="flex-none group relative block transition duration-300 px-3 py-2.5 hover:text-sky-200" href="/services">
        Services
        <span class="absolute inset-x-1 h-px bg-gradient-to-r from-violet-500/0 from-10% via-violet-400 to-violet-500/0 to-90% transition duration-300 -bottom-0.5 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100">
        </span>
        <span class="overflow-hidden absolute inset-0 transition origin-bottom duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
          <span class="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-violet-500/20 to-transparent blur rounded-t-full">
          </span>
        </span>
      </a>
      <a class="flex-none group relative block transition duration-300 px-3 py-2.5 hover:text-sky-200" href="/contactUs">
        Contact us
        <span class="absolute inset-x-1 h-px bg-gradient-to-r from-violet-500/0 from-10% via-violet-400 to-violet-500/0 to-90% transition duration-300 -bottom-0.5 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100">
        </span>
        <span class="overflow-hidden absolute inset-0 transition origin-bottom duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
          <span class="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-violet-500/20 to-transparent blur rounded-t-full">
          </span>
        </span>
      </a>
    </div>


    <div className="flex items-center space-x-4">


{User.isLoggedIn ? (
            <>
              <Logout />
              <div className="">
                <CartSidebar />
              </div>
            </>
          ) : (
            <AuthModal />
          )}

</div>
      </div>
    </div>
  );
}

export default Navbar;


