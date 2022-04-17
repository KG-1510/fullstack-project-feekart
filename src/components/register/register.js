/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { registerValidationSchema } from "../../utils/schema";
import LoadingAnimation from "../loader/loader";
import { postRegister } from "../../utils/api";
import { successHandler, errorHandler } from "../../utils/toastify";

export default function RegisterComponent() {
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["isAuth"]);
  const navigate = useNavigate();
  const initialValues = {};

  const submitHandler = async (values) => {
    console.log(values);
    try {
      setLoading(true);
      delete values.confirmPassword;
      console.log(values);
      const _res = await postRegister(values);
      console.log(_res);

      if (_res?.data?.status) {
        setCookie("isAuth", values.email, { path: "/" });
        successHandler("User Registered Successfully!");
        navigate("/dashboard");
      } else {
        errorHandler("An error has occured, please try again later!");
      }
      setLoading(false);
      //* INFO: fire and forget
    } catch (error) {}
  };

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
            <p className="italic text-sm">
              Fields marked with <span className="text-red-500">*</span> are
              compulsory.
            </p>
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Let's Get Started
            </h3>
            <Formik
              initialValues={initialValues}
              onSubmit={submitHandler}
              validateOnBlur={false}
              validationSchema={registerValidationSchema}
              enableReinitialize
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="flex flex-col space-y-5">
                    <div className="flex flex-col space-y-1">
                      <label className="text-sm font-semibold text-gray-500">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="name"
                        type="text"
                        autoFocus={true}
                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      />
                      {touched.name && errors.name && (
                        <div className="text-red-500 text-sm mt-14">
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col space-y-1">
                      <label className="text-sm font-semibold text-gray-500">
                        SRM Email ID <span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="email"
                        type="email"
                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      />
                      {touched.email && errors.email && (
                        <div className="text-red-500 text-sm mt-14">
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col space-y-1">
                      <label className="text-sm font-semibold text-gray-500">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="password"
                        type="password"
                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      />
                      {touched.password && errors.password && (
                        <div className="text-red-500 text-sm -mt-4 mb-3">
                          {errors.password}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col space-y-1">
                      <label className="text-sm font-semibold text-gray-500">
                        Confirm Password <span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="confirmPassword"
                        type="password"
                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      />
                      {touched.confirmPassword && errors.confirmPassword && (
                        <div className="text-red-500 text-sm -mt-4 mb-3">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col space-y-1">
                      <label className="text-sm font-semibold text-gray-500">
                        Profile Image Link
                      </label>
                      <Field
                        name="image"
                        type="text"
                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      />
                      {touched.image && errors.image && (
                        <div className="text-red-500 text-sm -mt-4 mb-3">
                          {errors.image}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col space-y-1">
                      <label className="text-sm font-semibold text-gray-500">
                        Year <span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="year"
                        as="select"
                        className={"rounded-md border-2 p-2 w-full lg:w-1/3"}
                      >
                        <option value="" label="Select Year">
                          Select Year
                        </option>
                        <option value="1" label="1">
                          1
                        </option>
                        <option value="2" label="2">
                          2
                        </option>
                        <option value="3" label="3">
                          3
                        </option>
                        <option value="4" label="4">
                          4
                        </option>
                        <option value="5" label="5">
                          5
                        </option>
                      </Field>

                      {touched.year && errors.year && (
                        <div className="text-red-500 text-sm -mt-4 mb-3">
                          {errors.year}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col space-y-1">
                      <label className="text-sm font-semibold text-gray-500">
                        Branch <span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="branch"
                        type="text"
                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      />
                      {touched.branch && errors.branch && (
                        <div className="text-red-500 text-sm -mt-4 mb-3">
                          {errors.branch}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col space-y-1">
                      <label className="text-sm font-semibold text-gray-500">
                        Specialization <span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="spl"
                        type="text"
                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      />
                      {touched.spl && errors.spl && (
                        <div className="text-red-500 text-sm -mt-4 mb-3">
                          {errors.spl}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-center flex-col">
                      <button
                        type="submit"
                        className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                      >
                        {loading ? (
                          <LoadingAnimation className="h-5" />
                        ) : (
                          <span>Register</span>
                        )}
                      </button>
                      <p className="my-2">
                        Already have an account?{" "}
                        <Link to="/login">
                          <span className="text-blue-500">Login!</span>
                        </Link>{" "}
                      </p>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
