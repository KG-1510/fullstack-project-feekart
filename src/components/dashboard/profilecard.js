import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ProfileCard() {
  return (
    <>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <h3 className="text-xl font-bold text-gray-900 mb-2">My Profile</h3>
        <img
          className="w-36 h-36 rounded-full mx-auto"
          src="https://media-exp1.licdn.com/dms/image/C5603AQElOHX5fWfC1w/profile-displayphoto-shrink_400_400/0/1645607283072?e=1655337600&v=beta&t=2HAQOOrx8vw8JjfwPRJLnmtCZxECxRPTZRawO6JTOLM"
          alt="profile-pic"
        />
        <div className="text-center my-4">
          <p className="text-lg font-bold">Kushagra Gupta</p>
          <p>B.tech CSE AIML, 3rd Year</p>
          <p className="italic my-2 text-gray-400">kg8147@srmist.edu.in</p>
          <Link to="/profile">
            <a>
              <button className="bg-blue-500 hover:opacity-90 text-white px-5 py-2 rounded-md my-10">
                Edit Profile
              </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
