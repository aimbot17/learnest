import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeSlash } from "phosphor-react";
import axios from "axios";
import { API_URL } from "@/config/Index";
import useAuthStore from "@/store/useAuthStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { setUser, login } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const clearForm = () => {
    setFormData({
      email: "",
      password: "",
      phoneNumber: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password, formData.phoneNumber);
      toast.success("Logged in successfully");
      clearForm();
    } catch (error) {
      let errorMessage = "Error during login. Please try again.";
      if (axios.isAxiosError(error) && error.response?.data) {
        errorMessage = error.response.data.message || errorMessage;
      }
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center space-y-8 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className=" text-center text-3xl font-extrabold text-gray-900">
          Log in
        </h2>
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
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
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
                autoComplete="tel"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
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
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="appearance-none mb-5 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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

          <span className="font-medium">
            Don't have an account?{" "}
            <Link
              to="/auth/signup"
              className="text-indigo-600 hover:text-indigo-500 hover:underline"
            >
              Sign up
            </Link>
          </span>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
