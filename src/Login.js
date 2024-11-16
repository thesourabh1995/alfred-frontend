import React from 'react';
import { GoogleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { FaJira } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

    const Logo = () => (
        <svg className="w-8 h-8 text-[#BC7C7C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
    );

    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent default form submission
      // Here you can also handle authentication logic if needed
      navigate("/assistant"); // Navigate to /assistant
  };
    
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#fffbe6]">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
      <div className="text-center flex flex-row justify-center">
          <Logo />
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Alfred
          </h2>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-[#E4C087] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e7bb74] bg-white text-gray-700 placeholder-gray-400 transition duration-200 ease-in-out"
              />
              <UserOutlined className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-[#E4C087] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e7bb74] bg-white text-gray-700 placeholder-gray-400 transition duration-200 ease-in-out"
              />
              <LockOutlined className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <button
          onClick={handleSubmit}
            type="submit"
            className="w-full py-3 bg-[#BC7C7C] text-white font-semibold rounded-lg hover:bg-[#c79393] focus:outline-none focus:ring-2 focus:ring-[#c79393] transition duration-200 ease-in-out"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-between my-6">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>

        {/* SSO Icons */}
        <div className="flex justify-center space-x-6">
          <button className="bg-white border-2 border-gray-300 p-3 rounded-full hover:border-gray-400 transition duration-200">
            <GoogleOutlined className="text-red-500 text-xl" />
          </button>
          <button className="bg-white border-2 border-gray-300 p-3 rounded-full hover:border-gray-400 transition duration-200">
            <FaJira className="text-blue-500 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
