import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/useAuthStore";

export default function Dashboard() {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <h1>Welcome to your dashboard, {user.name}!</h1>
    </div>
  );
}
