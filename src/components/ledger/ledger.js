import { latestTransactionsData } from "../../utils/dummy/latestTransactions";
import { SidebarComponent, NavbarComponent } from "../shared/index.js";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function LedgerComponent() {
  return (
    <>
      <NavbarComponent />
      <SidebarComponent />
      <div className="flex overflow-hidden bg-white pt-16">
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="pt-6 px-4">
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
    </>
  );
}
