import React from 'react'

function Footer() {
  return (
      <footer className="bg-black text-gray-400 py-6 mt-8">
      <div className="container mx-auto text-center">
        <h1 className="text-white text-2xl font-bold mb-4">Riders Revolution</h1>
        <ul className="flex justify-center space-x-6 text-sm mb-6">
          <li><a href="/" className="hover:text-blue-500">HOME</a></li>
          <li><a href="/aboutUs" className="hover:text-blue-500">ABOUT US</a></li>
          <li><a href="/bike" className="hover:text-blue-500">MARKETPLACE</a></li>
          <li><a href="/services" className="hover:text-blue-500">SERVICES</a></li>
          <li><a href="/contactUs" className="hover:text-blue-500">CONTACT</a></li>
        </ul>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-blue-500 text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-blue-500 text-xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-blue-500 text-xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="text-sm">
        Copyright © {new Date().getFullYear()} - All right reserved <span className="text-blue-500">&hearts;</span> by
        Riders Revolution
        </p>
      </div>
      </footer>
  )
}

export default Footer
