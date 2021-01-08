import React, { useEffect, useState } from "react";
import Router from "components/Router";
import { ThemeProvider } from "styled-components";
import Theme from "style/Theme";
import GlobalStyles from "style/GlobalStyles";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // check whether the user is Log in
    // setIsLogin()
  });

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Router isLogin={isLogin} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
