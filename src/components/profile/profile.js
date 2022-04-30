/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getUserProfile } from "../../utils/api";
import { NavbarComponent, SidebarComponent } from "../shared";
import { useCookies } from "react-cookie";
import { errorHandler } from "../../utils/toastify";
import LoadingAnimation from "../loader/loader";

export default function ProfileComponent() {
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
        console.log("userdata", _res);
      } catch (err) {
        errorHandler("An error occured while fetching data!");
      }
    })();
  }, []);

  return (
    <>
      <NavbarComponent />
      <SidebarComponent />
      <div className="flex overflow-hidden pt-16">
        <div
          id="main-content"
          className="h-full p-4 my-2 w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                My Profile
              </h3>
              <div className="flex flex-col lg:flex-row my-5">
                <img
                  className="w-36 h-36 rounded-full mx-auto lg:mx-0"
                  src={
                    userData?.image
                      ? userData?.image
                      : "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"
                  }
                  alt="profile-pic"
                />
                {userData ? (
                  <div className="mx-10">
                    <p className="text-lg font-bold my-3">
                      Name: {userData?.name}
                    </p>
                    <p className="my-3">Branch: {userData?.branch}</p>
                    <p className="my-3">Specialization: {userData?.spl}</p>
                    <p className="my-3">Email ID: {userData?.email}</p>
                    <p className="italic text-sm my-10">
                      (In case of any data change, please contact ITKM
                      department)
                    </p>
                  </div>
                ) : (
                  <LoadingAnimation className="h-8" color={"#000"} />
                )}
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
