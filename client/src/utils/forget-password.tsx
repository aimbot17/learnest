import { useState, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { CaretCircleLeft } from "phosphor-react";
import axios from "axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const API_URL = "http://localhost:8000/auth/forgot-password";
      const response = await axios.post(API_URL, { email });
      console.log(response);
      setSuccess(true);
      setEmail("");
    } catch (error: any) {
      setError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
      console.error("Error making POST request:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Link to={"/auth"} className="absolute top-0 left-0 p-4">
          <CaretCircleLeft size={30} />
        </Link>
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Forgot Your Password?
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              {loading && <p>Loading...</p>}
              {error && <p className="text-red-500">{error}</p>}
              {success && (
                <p className="text-green-500">
                  Password reset email sent successfully!
                </p>
              )}
            </div>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4 8a8 8 0 1116 0H4zm16 2H4a6 6 0 1112 0z"
                      />
                    </svg>
                  </span>
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
