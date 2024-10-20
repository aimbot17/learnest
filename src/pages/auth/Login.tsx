import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuthStore from "@/store/useAuthStore";
import Button from "@/components/button.component";
import { toast } from "react-toastify";
import Input from "@/components/input.component";

const Login = () => {
  const { setUser, login } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password, formData.phoneNumber);
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
    <div className="min-h-screen flex items-center justify-center space-y-8 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
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
              type="password"
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

          <span className="font-medium">
            Don't have an account?{" "}
            <Link
              to="/auth/signup"
              className="text-gray-500 hover:text-gray-600 hover:underline"
            >
              Sign up
            </Link>
          </span>
          <Button content="Log in" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
