// src/components/Login.tsx
import { FormEvent, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { X, Eye, EyeSlash } from "phosphor-react";
import { API_URL } from "@/config/Index";
import { useAuthStore } from "@/store/useAuthStore";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, setError, clearUser } = useAuthStore();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const clearInput = () => {
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    // clearUser();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${API_URL}/auth/login`,
        { email, password, phoneNumber },
        { withCredentials: true }
      );

      // Set user data in Zustand store
      setUser({ email: data.email, phoneNumber: data.phoneNumber });
      clearInput();
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Error during Login: ", error);
      if (axios.isAxiosError(error)) {
        // Check if the error has a response with a status code
        if (error.response) {
          // The request was made and the server responded with a status code
          setError(
            error.response.data.message || "An unexpected error occurred."
          );
        } else if (error.request) {
          // The request was made but no response was received
          setError("No response from the server. Please try again.");
        } else {
          // Something happened in setting up the request
          setError("Error: " + error.message);
        }
      } else {
        // Handle non-Axios errors
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Link to="/Home" className="absolute top-0 left-0 p-4">
        <X size={30} />
      </Link>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="sr-only">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Display error message */}
          <div className="text-red-500">{useAuthStore().error}</div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link
            to="/auth/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
