import { useState, ReactNode } from "react";
import FallAuth from "../components/auth.component";

interface PrivateRoutesProps {
  children: ReactNode;
}
const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return <>{isAuthenticated ? <>{children}</> : <FallAuth />}</>;
};

export default PrivateRoutes;
