import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/useAuthStore";
import Sidebar from "@/components/sidebar.component";

export default function Dashboard() {
  const user = useUserStore((state) => state.user);
  console.log(user);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="flex">
      <Sidebar />
      <h1>Welcome to your dashboard, {user?.name}!</h1>
    </div>
  );
}
