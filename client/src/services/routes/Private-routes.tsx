import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/RootState";
import FallAuth from "../../components/auth.component";
import AuthChecker from "../../utils/AuthCheck";

interface PrivateRoutesProps {
  children: ReactNode;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ children }) => {
  const Login_Details = AuthChecker();
  const isLogin = Login_Details?.isUserLoggedIn?.isAuthenticated;

  return <>{isLogin ? <>{children}</> : <FallAuth />}</>;
};

export default PrivateRoutes;
