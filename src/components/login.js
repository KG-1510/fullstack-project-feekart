/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-2 text-white bg-blue-500 md:w-96 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <a
                href="https://srmist.edu.in"
                target="_blank"
                className="flex items-center justify-center"
                rel="noopener noreferrer"
              >
                <img
                  src="https://vectorlogoseek.com/wp-content/uploads/2019/03/srm-institute-of-science-and-technology-vector-logo.png"
                  alt="srm-logo"
                  width={200}
                  className="h-24 rounded-md"
                />
              </a>
              <h1 className="my-2">SRM Feekart</h1>
            </div>
            <p className="mt-6 font-normal text-center text-white md:mt-0">
              SRMIST students can login with their NetID Credentials
            </p>
            <p className="mt-6 text-sm text-center text-white">
              (i.e If your mail id is abcd@srmist.edu.in, your NetID is abcd &
              password will be e-mail password)
            </p>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Account Login
            </h3>
            <div action="#" className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  User ID
                </label>
                <input
                  type="email"
                  id="email"
                  autofocus=""
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                  >
                    Forgot Password?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-semibold text-gray-500"
                >
                  Remember me
                </label>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Enter CAPTCHA Code
                </label>
                <img
                  width={110}
                  src="https://feekart.srmist.edu.in/srmopp/Captcha"
                  alt="captcha-code"
                  className="my-2"
                />
                <input
                  type="email"
                  id="email"
                  autofocus=""
                  className="px-4 py-2 my-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex items-center justify-center">
                <Link className="w-full" to="/home">
                  <button className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
