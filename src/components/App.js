import React, { useState } from "react";
import Router from "components/Router";
import { ThemeProvider } from "styled-components";
import Theme from "style/Theme";
import GlobalStyles from "style/GlobalStyles";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <AuthProvider>
          <Router />
        </AuthProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
