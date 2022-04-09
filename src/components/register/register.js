/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

export default function RegisterComponent() {
  return (
    <>
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-col md:w-full lg:max-w-screen-md">
          <div className="p-2 text-white bg-blue-500 md:w-full md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
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
              <p className="mt-6 text-sm text-center text-white md:mt-0">
                Fill your details and get your account activated!
              </p>
            </div>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Let's Get Started
            </h3>
            <div action="#" className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-semibold text-gray-500">
                  Full Name
                </label>
                <input
                  type="text"
                  autofocus="true"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm font-semibold text-gray-500">
                  SRM Email ID
                </label>
                <input
                  type="email"
                  autofocus=""
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm font-semibold text-gray-500">
                  Password
                </label>
                <input
                  type="password"
                  autofocus=""
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm font-semibold text-gray-500">
                  Confirm Password
                </label>
                <input
                  type="password"
                  autofocus=""
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm font-semibold text-gray-500">
                  Profile Image
                </label>
                <input type="file" src="" alt="profile-image" />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm font-semibold text-gray-500">
                  Year
                </label>
                <select name="year" id="year">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm font-semibold text-gray-500">
                  Branch
                </label>
                <input
                  type="text"
                  autofocus=""
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm font-semibold text-gray-500">
                  Specialization
                </label>
                <input
                  type="text"
                  autofocus=""
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

              <div className="flex items-center justify-center flex-col">
                <Link className="w-full" to="/dashboard">
                  <button className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                    Register
                  </button>
                </Link>
                <p className="my-2">
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="text-blue-500">Login!</span>
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
