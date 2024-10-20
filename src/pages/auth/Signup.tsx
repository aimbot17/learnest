import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from "phosphor-react";
import Button from "@/components/button.component";
import useAuthStore from "@/store/useAuthStore";
import Input from "@/components/input.component";
import { toast } from "react-toastify";

const SignUp = () => {
  const { signup, setUser } = useAuthStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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
      const { success, message } = await signup(
        formData.name,
        formData.email,
        formData.password,
        formData.phoneNumber
      );

      if (success) {
        toast.success("Account created successfully");
        setUser({
          name: formData.name,
          email: formData.email,
          username: formData.name,
          phoneNumber: formData.phoneNumber,
        });
        // Clear form data after sign-up
        setFormData({ name: "", email: "", password: "", phoneNumber: "" });
        navigate("/dashboard");
      } else {
        toast.error(message || "Signup failed");
      }
    } catch (error) {
      toast.error("Error during sign-up. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Sign up
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              autoComplete="name"
              required
            />
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
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-gray-500 hover:text-gray-600 hover:underline"
            >
              Login
            </Link>
          </span>
          <Button type="submit" content="Sign up" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
