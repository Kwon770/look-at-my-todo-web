import React from "react";
import styled from "styled-components";
import RankerHolder from "../components/Rank/RankerHolder";

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
  return (
    <Container>
      <Header></Header>
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
