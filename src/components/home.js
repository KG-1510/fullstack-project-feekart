/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { Link } from "react-router-dom";
import { useState } from "react";
import { pendingTransactionsData } from "../utils/dummy/pendingTransactions";
import { latestTransactionsData } from "../utils/dummy/latestTransactions";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-expanded="true"
                aria-controls="sidebar"
                className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
              >
                <svg
                  id="toggleSidebarMobileHamburger"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  id="toggleSidebarMobileClose"
                  className="w-6 h-6 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <a
                href="https://srmist.edu.in"
                className="text-xl font-bold flex items-center lg:ml-2.5"
              >
                <img
                  src="https://vectorlogoseek.com/wp-content/uploads/2019/03/srm-institute-of-science-and-technology-vector-logo.png"
                  alt="srm-logo"
                  width={100}
                  className="h-18 rounded-md"
                />
              </a>
              <form
                action="#"
                method="GET"
                className="hidden lg:block lg:pl-32"
              >
                <label htmlFor="topbar-search" className="sr-only">
                  Search
                </label>
                <div className="mt-1 relative lg:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="topbar-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <button
                id="toggleSidebarMobileSearch"
                type="button"
                className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
              >
                <span className="sr-only">Search</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <Link to="/">
                <a className="hidden sm:inline-flex ml-5 text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                  <svg
                    className="w-6 h-6 flex-shrink-0 transition duration-75 mx-2"
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
                  Logout
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex overflow-hidden bg-white pt-16">
        {sidebarOpen && (
          <aside
            className="fixed z-20 h-full top-0 left-0 pt-16 flex flex-shrink-0 flex-col w-64 transition-width duration-75"
            aria-label="Sidebar"
          >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex-1 px-3 bg-white divide-y space-y-1">
                  <ul className="space-y-2 pb-2">
                    <li>
                      <form action="#" method="GET" className="lg:hidden">
                        <label htmlFor="mobile-search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            name="email"
                            id="mobile-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 block w-full pl-10 p-2.5"
                            placeholder="Search"
                          />
                        </div>
                      </form>
                    </li>
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
                      <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
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

        {/* Desktop navbar */}
        <aside
          className="fixed z-20 h-full top-0 left-0 pt-16 hidden lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 bg-white divide-y space-y-1">
                <ul className="space-y-2 pb-2">
                  <li>
                    <form action="#" method="GET" className="lg:hidden">
                      <label htmlFor="mobile-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="email"
                          id="mobile-search"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 block w-full pl-10 p-2.5"
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </li>
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
                    <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
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
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="pt-6 px-4">
              <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Pending Transactions
                      </h3>
                      <span className="text-base font-normal text-gray-500">
                        This is a list of all the pending transactions
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href="#"
                        className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
                      >
                        View all
                      </a>
                    </div>
                  </div>
                  <div className="my-2">
                    <div className="overflow-x-auto rounded-lg">
                      <div className="align-middle inline-block min-w-full">
                        <div className="shadow overflow-hidden sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Transaction
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Due Date
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Amount
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Status
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              {pendingTransactionsData.map((item) => {
                                return (
                                  <tr>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                      {item.transaction}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      {item.due_date}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      {item.amount}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      {item.status === "pending" ? (
                                        <span className="text-yellow-600 p-1 rounded-full bg-yellow-100">
                                          Pending
                                        </span>
                                      ) : item.status === "paid" ? (
                                        <span className="text-green-600 p-1 rounded-full bg-green-100">
                                          Paid
                                        </span>
                                      ) : (
                                        <span className="text-red-600 p-1 rounded-full bg-red-100">
                                          Overdue
                                        </span>
                                      )}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      {item.status === "pending" ? (
                                        <button className="bg-green-500 text-white font-semibold p-2 rounded-md">
                                          Pay Now
                                        </button>
                                      ) : item.status === "paid" ? (
                                        <span className="text-green-600 px-2 py-1 rounded-full bg-green-100">
                                          ✅ Paid
                                        </span>
                                      ) : (
                                        <button className="bg-yellow-500 text-white font-semibold p-2 rounded-md">
                                          Pay with Penalty
                                        </button>
                                      )}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Latest Transactions
                      </h3>
                      <span className="text-base font-normal text-gray-500">
                        This is a list of latest transactions
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href="#"
                        className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
                      >
                        View all
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col mt-8">
                    <div className="overflow-x-auto rounded-lg">
                      <div className="align-middle inline-block min-w-full">
                        <div className="shadow overflow-hidden sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Transaction
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Paid On
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Amount
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              {latestTransactionsData.map((item) => {
                                return (
                                  <tr>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                      {item.transaction}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      {item.paid_on}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      {item.amount}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      <button className="bg-green-500 text-white font-semibold p-2 rounded-md">
                                        View Details
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <p className="text-center text-sm text-gray-500 my-10">
            © 2022{" "}
            <a
              href="https://srmist.edu.in"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              SRM Institute of Science and Technology
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
