import React, { useState } from "react";
import styled from "styled-components";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Button, Snackbar, Avatar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { FcGoogle } from "react-icons/fc";
import RankerHolder from "../components/Rank/RankerHolder";
import {
  useOnLoginSuccess,
  useOnLoginFail,
  useOnLogoutSuccess,
  useIsLoggedIn,
  useProfile,
} from "../components/AuthContext";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const tmpRanker = [
  {
    name: "sketom",
    email: "sketom77@gmail.com",
    score: 50,
    profile:
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEb9Hu%2FbtqwAScSMHs%2FKkzzAFbkBTQFLJ5GONJlb0%2Fimg.jpg",
  },
  {
    name: "sckwon770",
    email: "sckwon770@gmail.com",
    score: 30,
    profile:
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEb9Hu%2FbtqwAScSMHs%2FKkzzAFbkBTQFLJ5GONJlb0%2Fimg.jpg",
  },
];

const tmpRankerTodo = [
  {
    title: "dailyCode",
    isCompleted: "true",
    closingDate: "2020-02-02",
    closingTime: "20:20",
  },
  {
    title: "weeklyCode",
    isCompleted: "false",
    closingDate: "2020-02-02",
    closingTime: "20:20",
  },
];

const Rank = ({ topRanker = tmpRanker }) => {
  const GOOGLE_ID =
    "361160379535-hlb1o4ae45k8148upclidimheeuira9n.apps.googleusercontent.com";
  const onLoginSuccess = useOnLoginSuccess();
  const onLoginFail = useOnLoginFail();
  const onLogoutSuccess = useOnLogoutSuccess();
  const isLoggedIn = useIsLoggedIn();
  const profile = useProfile();

  const [loginSnackbarOpen, setLoginSnackbarOpen] = useState(false);
  const handleLoginSuccess = (response) => {
    setLoginSnackbarOpen(true);
    onLoginSuccess(response);
  };
  const handleLoginSnackBarClose = (event, reason) => {
    if (reason === "clickaway") return;

    setLoginSnackbarOpen(false);
  };
  const [logoutSnackbarOpen, setLogoutSnackbarOpen] = useState(false);
  const handleLogoutSuccess = (response) => {
    setLogoutSnackbarOpen(true);
    onLogoutSuccess(response);
  };
  const handleLogoutSnackBarClose = (event, reason) => {
    if (reason === "clickaway") return;

    setLogoutSnackbarOpen(false);
  };

  return (
    <Container>
      <Snackbar
        open={loginSnackbarOpen}
        autoHideDuration={3300}
        onClose={handleLoginSnackBarClose}
      >
        <Alert onClose={handleLoginSnackBarClose} severity="success">
          🙋‍♂️ Logged in successfully !
        </Alert>
      </Snackbar>
      <Snackbar
        open={logoutSnackbarOpen}
        autoHideDuration={3300}
        onClose={handleLogoutSnackBarClose}
      >
        <Alert onClose={handleLogoutSnackBarClose} severity="success">
          👋 Logged out successfully !
        </Alert>
      </Snackbar>
      <Header>
        {isLoggedIn ? (
          <Profile>
            <Avatar src={profile.picture} style={{ marginRight: 15 }} />
            <h2>{profile.name}</h2>
          </Profile>
        ) : (
          <div></div>
        )}
        {isLoggedIn ? (
          <GoogleLogout
            clientId={GOOGLE_ID}
            onLogoutSuccess={handleLogoutSuccess}
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<FcGoogle />}
                style={{ color: "#FFFFFF" }}
              >
                Logout
              </Button>
            )}
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_ID}
            onSuccess={handleLoginSuccess}
            onFailure={onLoginFail}
            cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<FcGoogle />}
                style={{ color: "#FFFFFF" }}
              >
                Login
              </Button>
            )}
          />
        )}
      </Header>
      <Greeting>🔥 Look At My Todo 🔥</Greeting>
      <RankerTitle>👑 Top 10 Ranker 👑</RankerTitle>
      <Grid>
        {topRanker.map((ranker, idx) => (
          <RankerHolder
            key={idx}
            grade={idx}
            ranker={ranker}
            rankerTodo={tmpRankerTodo}
          ></RankerHolder>
        ))}
      </Grid>
    </Container>
  );
};

const Grid = styled.div`
  width: 100%;
  padding: 0px 10%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
`;

const RankerTitle = styled.div`
  ${(props) => props.theme.ColumnCenterAlignment}
  width: 100%;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Greeting = styled.div`
  ${(props) => props.theme.ColumnCenterAlignment}
  width: 100%;
  height: 300px;
  font-size: 50px;
  font-weight: 800;
`;

const Profile = styled.div`
  ${(props) => props.theme.RowCenterAlignment}
`;

const Header = styled.div`
  ${(props) => props.theme.RowCenterAlignment};
  justify-content: space-between;
  padding: 0px 20px;
  margin-bottom: 40px;
  width: 100%;
  height: 65px;
  background-color: ${(props) => props.theme.deepBgColor};
  ${(props) => props.theme.UiShadow}
`;

const Container = styled.div`
  ${(props) => props.theme.Page}
`;

export default Rank;
