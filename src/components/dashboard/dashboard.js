/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react";
import moment from "moment";
import { useCookies } from "react-cookie";
import { pendingTransactionsData } from "../../utils/dummy/pendingTransactions";
import { SidebarComponent, NavbarComponent } from "../shared/index.js";
import { getRzpOrderId } from "../../utils/api";
import { ProfileCardComponent } from ".";
import { getUserProfile } from "../../utils/api";
import { errorHandler, successHandler } from "../../utils/toastify";

export default function Dashboard() {
  const [cookies, setCookie] = useCookies(["isAuth"]);
  const [userData, setUserData] = useState();
  const values = {
    email: cookies.isAuth,
  };

  useEffect(() => {
    (async function () {
      try {
        const _res = await getUserProfile(values);
        setUserData(_res.data.data);
      } catch (err) {
        errorHandler("An error occured while fetching data!");
      }
    })();
  }, []);

  const updateDashboard = () => {
    (async function () {
      try {
        const _res = await getUserProfile(values);
        setUserData(_res.data.data);
      } catch (err) {
        errorHandler("An error occured while fetching data!");
      }
    })();
  };

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

  async function displayRazorpay(item, e) {
    console.log("Transaction selected: ", item);

    (async function () {
      let amt;
      if (e) {
        amt = Number(item.amount.substring(1)) + 1000;
      } else {
        amt = Number(item.amount.substring(1));
      }
      console.log("Amount to pay", amt);
      const _values = {
        txn_name: item.transaction,
        amount: amt,
        email: userData.email,
        txn_id: item.id,
      };
      console.log(_values);
      try {
        const _res = await getRzpOrderId(_values);
        console.log(_res);
        if (_res) {
          const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
          );

          if (!res) {
            alert("Error loading Razorpay SDK! Please try again later!");
            return;
          }

          const options = {
            key: KEY_ID, // Enter the Key ID generated from the Dashboard
            amount: _res?.data?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Feekart SRM",
            description: "Fee Payment for SRMIST",
            image:
              "https://vectorlogoseek.com/wp-content/uploads/2019/03/srm-institute-of-science-and-technology-vector-logo.png",
            order_id: _res?.data?.id, //Pass the `id` obtained in the response of Step 1
            handler: function (response) {
              if(response.razorpay_payment_id) {
                console.log("Razorpay Response: ", response);
                successHandler("Payment Successful!");
                updateDashboard();
              }
              else {
                errorHandler("Payment Failed!");
              }
            },
            prefill: {
              name: userData.name,
              email: userData.email,
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
      } catch (err) {
        errorHandler("An error occured while fetching data!");
      }
    })();
  }

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
                                console.log(
                                  "time",
                                  moment().diff(item.due_date, "minutes")
                                );
                                return (
                                  <tr key={item.id}>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                      {item.transaction}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      {moment(item.due_date).format(
                                        "MMM Do YYYY"
                                      )}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      {item.amount}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      {userData?.paid_txn?.includes(item.id) ? (
                                        <div className="text-green-600 p-2 rounded-full bg-green-100 w-full text-center">
                                          Paid
                                        </div>
                                      ) : moment().diff(
                                          item.due_date,
                                          "minutes"
                                        ) < 0 ? (
                                        <div className="text-yellow-600 p-2 rounded-full bg-yellow-100 w-full text-center">
                                          Pending
                                        </div>
                                      ) : (
                                        <div className="text-red-600 p-2 rounded-full bg-red-100 w-full text-center">
                                          Overdue
                                        </div>
                                      )}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      {userData?.paid_txn?.includes(item.id) ? (
                                        <div className="text-green-600 p-2 rounded-full bg-green-100 w-full text-center">
                                          ✅ Paid
                                        </div>
                                      ) : moment().diff(
                                          item.due_date,
                                          "minutes"
                                        ) < 0 ? (
                                        <button
                                          onClick={() => displayRazorpay(item)}
                                          className="bg-green-500 text-white font-semibold p-2 rounded-md w-full"
                                        >
                                          Pay Now
                                        </button>
                                      ) : (
                                        <button
                                          onClick={(e) =>
                                            displayRazorpay(item, e)
                                          }
                                          className="bg-yellow-500 text-white font-semibold p-2 rounded-md w-full"
                                        >
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
