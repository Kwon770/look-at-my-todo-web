import React, { useEffect, useState } from "react";
import Router from "components/Router";
import { ThemeProvider } from "styled-components";
import Theme from "style/Theme";
import GlobalStyles from "style/GlobalStyles";
import { AuthProvider } from "./AuthContext";

function App() {
  const [isLoggedIn, setIsLogin] = useState(false);

  useEffect(() => {
    // check whether the user is Log in
    // setIsLogin()
  });

  return (
    <>
      <ThemeProvider theme={Theme}>
        <AuthProvider isLoggedIn={isLoggedIn}>
          <Router />
        </AuthProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
