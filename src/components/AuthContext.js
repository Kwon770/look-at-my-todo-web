import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ isLoggedIn: initIsLoggedIn, children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initIsLoggedIn);
  const [profile, setProfile] = useState({
    email: "",
    name: "",
    profile: "",
  });

  const onLoginSuccess = (response) => {
    try {
      const {
        profileObj: { email, name, imageUrl },
        tokenObj: { access_token },
      } = response;

      setProfile({
        email,
        name,
        imageUrl,
      });

      // send login or signup request to server

      localStorage.setItem("token", access_token);
      setIsLoggedIn(true);
    } catch (e) {
      console.log("[Error] Failed parsing the login data : ", e);
    }
  };

  const onLoginFail = (e) => {
    console.log("[Error] Failed trying to login : ", e);
  };

  const onLogoutSuccess = (response) => {
    console.log(response);

    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        profile,
        onLoginSuccess,
        onLoginFail,
        onLogoutSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useIsLoggedIn = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
};

export const useProfile = () => {
  const { profile } = useContext(AuthContext);
  return profile;
};

export const useOnLoginSuccess = () => {
  const { onLoginSuccess } = useContext(AuthContext);
  return onLoginSuccess;
};

export const useOnLoginFail = () => {
  const { onLoginFail } = useContext(AuthContext);
  return onLoginFail;
};

export const useOnLogoutSuccess = () => {
  const { onLogoutSuccess } = useContext(AuthContext);
  return onLogoutSuccess;
};
