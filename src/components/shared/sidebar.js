/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { sidebarOpen } from "../../utils/store";

export default function Sidebar() {
  let currentRoute = useLocation();

  const sbOpen = useRecoilValue(sidebarOpen);

  return (
    <>
      {sbOpen && (
        <aside
          className="fixed z-20 h-full top-0 left-0 pt-16 flex flex-shrink-0 flex-col w-64 transition-width duration-75"
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 bg-white divide-y space-y-1">
                <ul className="space-y-2 pb-2">
                  <li>
                    <a className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
                      <svg
                        className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                      </svg>
                      <span className="ml-3">Dashboard</span>
                    </a>
                  </li>

                  <li>
                    <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                      <svg
                        className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        My Profile
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://shopcartmen.herokuapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                    >
                      <svg
                        className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Products
                      </span>
                    </a>
                  </li>
                  <li>
                    <Link to="/ledger">
                      <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                        <svg
                          className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-3 flex-1 whitespace-nowrap">
                          Transaction Ledger
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                        <svg
                          className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-3 flex-1 whitespace-nowrap">
                          Logout
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      )}

      <aside
        className="fixed z-20 h-full top-0 left-0 pt-16 hidden lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
        aria-label="Sidebar"
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                <li>
                  <Link to="/dashboard">
                    <a
                      className={`${
                        currentRoute.pathname === "/dashboard" &&
                        "bg-gray-100 text-gray-600 font-bold border-l-4 border-blue-400"
                      } text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group`}
                    >
                      <svg
                        className={`${
                          currentRoute.pathname === "/dashboard" &&
                          "text-gray-900"
                        } w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                      </svg>
                      <span className="ml-3">Dashboard</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <a
                      className={`${
                        currentRoute.pathname === "/profile" &&
                        "bg-gray-100 text-gray-600 font-bold border-l-4 border-blue-400"
                      } text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group`}
                    >
                      <svg
                        className={`${
                          currentRoute.pathname === "/profile" &&
                          "text-gray-900"
                        } w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        My Profile
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    href="https://shopcartmen.herokuapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                  >
                    <svg
                      className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 flex-1 whitespace-nowrap">
                      Products
                    </span>
                  </a>
                </li>
                <li>
                  <Link to="/ledger">
                    <a
                      className={`${
                        currentRoute.pathname === "/ledger" &&
                        "bg-gray-100 text-gray-600 font-bold border-l-4 border-blue-400"
                      } text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group`}
                    >
                      <svg
                        className={`${
                          currentRoute.pathname === "/ledger" && "text-gray-900"
                        } w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Transaction Ledger
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                      <svg
                        className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Logout
                      </span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <div
        className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
        id="sidebarBackdrop"
      />
    </>
  );
}
