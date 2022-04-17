/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { pendingTransactionsData } from "../../utils/dummy/pendingTransactions";
import { SidebarComponent, NavbarComponent } from "../shared/index.js";
import { ProfileCardComponent } from ".";

const KEY_ID = process.env.REACT_APP_RAZORPAY_KEY_ID;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

async function displayRazorpay() {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Error loading Razorpay SDK! Please try again later!");
    return;
  }
  
  const options = {
    key: KEY_ID, // Enter the Key ID generated from the Dashboard
    amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Feekart SRM",
    description: "Fee Payment for SRMIST",
    image:
      "https://vectorlogoseek.com/wp-content/uploads/2019/03/srm-institute-of-science-and-technology-vector-logo.png",
    order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
    },
    notes: {
      address: "SRMIST, Chennai",
    },
    theme: {
      color: "#3399cc",
    },
  };
  console.log(options);
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

export default function Dashboard() {
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
              <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Pending Transactions
                      </h3>
                      <span className="text-base font-normal text-gray-500">
                        This is a list of all the pending transactions
                      </span>
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
                                        <button
                                          onClick={() => displayRazorpay()}
                                          className="bg-green-500 text-white font-semibold p-2 rounded-md"
                                        >
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
                <ProfileCardComponent />
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
