import { useState, useEffect } from "react";

const AuthChecker = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState<object>({});

  useEffect(() => {
    const login_data = localStorage.getItem("userData");
    if (login_data !== null) {
      setUserLoggedIn(JSON.parse(login_data));
    }
  }, []);

  return { isUserLoggedIn };
};

export default AuthChecker;
