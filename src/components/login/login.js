/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../utils/api";
import { Formik, Field, Form } from "formik";
import { useCookies } from 'react-cookie';
import { loginValidationSchema } from "../../utils/schema";
import { errorHandler, successHandler } from "../../utils/toastify";
import LoadingAnimation from "../loader/loader";
import ClientCaptcha from "react-client-captcha";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [captchaCode, setCaptchaCode] = useState();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['isAuth']);
  const initialValues = {};

  const submitHandler = async (values) => {
    try {
      setLoading(true);
      console.log(values);
      const _res = await postLogin(values);
      console.log(_res);
      if (values.captcha === captchaCode) {
        if (_res?.data?.status) {
          // setIsAuth(true);
          delete values.captcha;
          setCookie('isAuth', values.email, { path: '/' });
          successHandler("Login successful!");
          navigate("/dashboard");
        } else {
          errorHandler("Invalid credentials, please try again!");
        }
      } else {
        errorHandler("Invalid CAPTCHA, please try again!");
      }
      setLoading(false);
      //* INFO: fire and forget
    } catch (error) {}
  };

  return (
    <>
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-2 text-white bg-blue-500 md:w-96 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
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
            </div>
            <p className="mt-6 font-normal text-center text-white md:mt-0">
              SRMIST students can login with their NetID Credentials
            </p>
            <p className="mt-6 text-sm text-center text-white">
              (i.e If your mail id is abcd@srmist.edu.in, your NetID is abcd &
              password will be e-mail password)
            </p>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Account Login
            </h3>
            <Formik
              initialValues={initialValues}
              onSubmit={submitHandler}
              validateOnBlur={false}
              validationSchema={loginValidationSchema}
              enableReinitialize
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="flex flex-col space-y-5">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-semibold text-gray-500">
                        User ID
                      </p>
                      <Field
                        name="email"
                        type="email"
                        autoFocus={true}
                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      />
                      {touched.email && errors.email && (
                        <div className="text-red-500 text-sm mt-14">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-gray-500">
                          Password
                        </p>
                      </div>
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

                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-gray-500">
                        Enter CAPTCHA Code
                      </p>
                      <ClientCaptcha
                        captchaCode={(code) => setCaptchaCode(code)}
                        charsCount={4}
                      />
                      <Field
                        name="captcha"
                        type="text"
                        className="px-4 py-2 my-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      />
                      {touched.captcha && errors.captcha && (
                        <div className="text-red-500 text-sm mb-3">
                          {errors.captcha}
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
                          <span>Login</span>
                        )}
                      </button>
                      <p className="my-2">
                        Don't have an account?{" "}
                        <Link to="/register">
                          <span className="text-blue-500">Register now!</span>
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
