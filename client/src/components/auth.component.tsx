import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <div>
        <Link to={"/auth"}>Login</Link>
      </div>
      <div>
        <Link to={"/auth/signup"}>Signup</Link>
      </div>
    </div>
  );
};

export default Auth;
