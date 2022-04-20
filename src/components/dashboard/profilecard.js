/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getUserProfile } from "../../utils/api";
import { errorHandler } from "../../utils/toastify";
import LoadingAnimation from "../loader/loader";

export default function ProfileCard() {
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
        console.log("userdata",_res)
      } catch (err) {
        errorHandler("An error occured while fetching data!");
      }
    })();
  }, []);

  return (
    <>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <h3 className="text-xl font-bold text-gray-900 mb-2">My Profile</h3>
        {userData ? (
          <>
            <img
              className="w-36 h-36 rounded-full mx-auto mt-12 mb-2"
              src={
                userData.image
                  ? userData.image
                  : "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"
              }
              alt="profile-pic"
            />
            <div className="text-center my-4">
              <p className="text-lg font-bold">{userData.name}</p>
              <p>
                {userData.branch} {userData.spl}, Year {userData.year}
              </p>
              <p className="italic my-2 text-gray-400">{userData.email}</p>
              <Link to="/profile">
                <a>
                  <button className="bg-blue-500 hover:opacity-90 text-white px-5 py-2 rounded-md my-10">
                    Edit Profile
                  </button>
                </a>
              </Link>
            </div>
          </>
        ) : (
          <>
            <LoadingAnimation color={"#000"} className="h-10" />
          </>
        )}
      </div>
    </>
  );
}
