import { requestLoginApi } from "api/ApiService";
import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({
    email: "",
    name: "",
    picture: "",
  });

  const onLoginSuccess = (name, email, picture, access_token) => {
    try {
      setProfile({
        name,
        email,
        picture,
      });

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

  const loadProfile = async (token) => {
    try {
      const user = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { email, name, picture } = await user.json();
      setProfile({ email, name, picture });
      setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
      setProfile({
        email: "failed",
        name: "failed",
        picture: "",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        profile,
        onLoginSuccess,
        onLoginFail,
        onLogoutSuccess,
        loadProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const checkTokenAvailable = async (token) => {
  const user = await fetch("https://www.googleapis.com/userinfo/v2/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const { id } = await user.json();

  // Check whether there is id from db.

  if (id !== undefined) return true;
  else return false;
};

export const requestLogin = (name, email, picture) => {
  try {
    const request = requestLoginApi(name, email, picture);
    if (request.status !== 200) throw "SEVER CONNECTION FAILED";

    return true;
  } catch (e) {
    console.log("[Error] Sever : ", e);
    return false;
  }
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

export const useLoadProfile = () => {
  const { loadProfile } = useContext(AuthContext);
  return loadProfile;
};
