import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useUserStore } from "@/store/useAuthStore";
import Button from "@/components/button.component";
import { toast } from "react-toastify";
import Input from "@/components/input.component";
import BookingPage from "@/components/bookdemo.component";
import { Icon } from "@/components/icons.component";
import { API_URL } from "@/config/Index"; // Adjust this import based on your project structure
import { useApi } from "@/hooks/useApi";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Using useApi hook to initialize the API call setup
  const { executeRequest, loading, error } = useApi(
    `${API_URL}/api/auth/login`,
    "POST",
    { immediate: false }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await executeRequest("POST", formData);
      toast.success("Logged in successfully");
      setFormData({ email: "", password: "", phoneNumber: "" });
    } catch (error) {
      let errorMessage = "Error during login. Please try again.";
      if (axios.isAxiosError(error) && error.response?.data) {
        errorMessage = error.response.data.message || errorMessage;
      }
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <BookingPage />

      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Log in
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="email"
              required
            />
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              autoComplete="tel"
              required
            />
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="current-password"
              required
              showPasswordToggle
              showPassword={showPassword}
              onTogglePasswordVisibility={() =>
                setShowPassword((prev) => !prev)
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">
              Don't have an account?{" "}
              <Link
                to="/auth/signup"
                className="font-medium text-primary hover:text-primary-700"
              >
                Sign up
              </Link>
            </span>
            <Link
              to="/auth/forgot-password"
              className="text-sm font-medium text-primary hover:text-primary-700"
            >
              Forgot password?
            </Link>
          </div>
          <Button type="submit" fullWidth disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" fullWidth>
              <Icon name="twitter" />
              Twitter
            </Button>
            <Button variant="outline" fullWidth>
              <Icon name="github" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
