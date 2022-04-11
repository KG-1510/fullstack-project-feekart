import { NavbarComponent, SidebarComponent } from "../shared";

export default function ProfileComponent() {
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
                  src="https://media-exp1.licdn.com/dms/image/C5603AQElOHX5fWfC1w/profile-displayphoto-shrink_400_400/0/1645607283072?e=1655337600&v=beta&t=2HAQOOrx8vw8JjfwPRJLnmtCZxECxRPTZRawO6JTOLM"
                  alt="profile-pic"
                />
                <div className="mx-10">
                  <p className="text-lg font-bold my-3">Name: Kushagra Gupta</p>
                  <p my-3>Branch: B.tech CSE</p>
                  <p my-3>Specialization: AIML</p>
                  <p my-3>Email ID: kg8147@srmist.edu.in</p>
                  <p my-3>Password: **********</p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:opacity-90 text-white px-5 py-2 rounded-md my-10 ">
                  Save Changes
                </button>
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
