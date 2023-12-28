import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/RootState";
import FallAuth from "../../components/auth.component";

interface PrivateRoutesProps {
  children: ReactNode;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = (props) => {
  const { children } = props;

  const isAuthenticated = useSelector(
    (store: RootState) => store?.auth?.signup?.isAuthenticated
  );

  return <>{isAuthenticated ? <>{children}</> : <FallAuth />}</>;
};

export default PrivateRoutes;
