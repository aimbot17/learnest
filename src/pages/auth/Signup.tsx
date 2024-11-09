import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "@/components/button.component";
import Input from "@/components/input.component";
import BookingPage from "@/components/bookdemo.component";
import { Icon } from "@/components/icons.component";
import { useApi } from "@/hooks/useApi";
import { API_URL } from "@/config/config";
import type { User } from "@/types/RootState";
import { useUserStore } from "@/store/useAuthStore";

const SignUp = () => {
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const { loading, executeRequest } = useApi<User>(
    `${API_URL}/api/auth/signup`,
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
      const userData = await executeRequest("POST", formData);
      setUser(userData);
      toast.success("Sign up successful!");
      navigate("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Error during sign-up. Please try again.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
      console.error(err);
    }
  };

  const handleSocialSignUp = (provider: string) => {
    // Implement social sign-up logic here
    toast.info(`${provider} sign-up not implemented yet.`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <BookingPage />
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
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
              value={formData.name || ""}
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
              value={formData.phoneNumber || ""}
              onChange={handleInputChange}
              autoComplete="tel"
              required
            />
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password || ""}
              onChange={handleInputChange}
              autoComplete="new-password"
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
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="font-medium text-primary hover:text-primary-700"
              >
                Log in
              </Link>
            </span>
          </div>
          <Button type="submit" fullWidth disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </Button>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or sign up with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              fullWidth
              onClick={() => handleSocialSignUp("Twitter")}
            >
              <Icon name="twitter" />
              Twitter
            </Button>
            <Button
              variant="outline"
              fullWidth
              onClick={() => handleSocialSignUp("GitHub")}
            >
              <Icon name="github" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
