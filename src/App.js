import React from "react";
import './tailwind.css';

function App() {
  return (
     <div className="container w-full mx-auto">
      <nav className="bg-white shadow-lg">
        <div className="md:flex items-center justify-between py-2 px-8 md:px-12" >
          <div className="flex justify-between items-center" >
            <div className="text-3x1 font-bold text-gray-800 md:text-3x1" >
              <a href="/">Logo</a>
            </div>
            <div className="flex items-center md:hidden">
              <button type="button" className="mobile-menu-button">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path  className="hidden"
                 
                    d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                  />
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row hidden md:block -mx-2">
            <a href="/"  className="text-gray-800 rounded py-2 px-2 md:mx-2">
              Register
            </a>
            <a href="/"  className="text-gray-800 rounded py-2 px-2 md:mx-2">
              Login
            </a>
          </div>
        </div>
      </nav>
      <div className="hero">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3x1 font-semibold text-gray-800 md:text-4x1" >
              Build The <span className="text-indigo-600" >Future</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a href="/" className="button button-two" >
                Get Started
              </a>
              <a href="/" className="button button-two" >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image" ></div>
        </div>
      </div>
    </div>
 
  );
}

export default App;
