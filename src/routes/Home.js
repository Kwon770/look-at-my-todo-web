import React from "react";
import styled from "styled-components";
import TodoFactory from "components/TodoFactory";

// add visual chart
// https://www.npmjs.com/package/easy-pie-chart-typescript
// https://www.npmjs.com/package/rumble-charts

const Home = () => {
  return (
    <>
      <Header></Header>
      <PageHolder>
        <TodoFactory />
        <Information>
          <ProgressHolder>
            <DateHolder>
              <AlignHolder>
                <DayOfWeek>Friday</DayOfWeek>
                <Date>8th</Date>
              </AlignHolder>
              <Month>January</Month>
            </DateHolder>
            <Figure>99</Figure>
            <FigureSymbol>/</FigureSymbol>
            <Figure>99</Figure>
          </ProgressHolder>
        </Information>
      </PageHolder>
    </>
  );
};

//
// Information - Figure
//

const FigureSymbol = styled.h2`
  margin: 0px 10px;
  font-size: 120px;
  font-weight: 800;
`;
const Figure = styled(FigureSymbol)`
  margin: 0px;
`;
const ProgressHolder = styled.div`
  display: flex;
  position: relative;
`;

// Information - Date

const Month = styled.h1`
  text-align: center;
  /* margin-top: 5px; */
`;

const AlignHolder = styled.div`
  display: flex;
  justify-content: center;
`;

const Date = styled.h1`
  font-size: 45px;
  font-weight: 200;
`;

const DayOfWeek = styled.h1`
  font-size: 45px;
  font-weight: 800;
  margin-right: 10px;
`;

const DateHolder = styled.div`
  align-items: center;
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  color: ${(props) => props.theme.hlColor}; ;
`;

// Information

const Information = styled.div`
  width: 30%;
  height: 85%;
  ${(props) => props.theme.CenterAlignment};
  transform: translateX(-7%);
`;

//
//
//

const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.deepBgColor};
`;

const PageHolder = styled.div`
  ${(props) => props.theme.PageHolder};
  ${(props) => props.theme.CenterAlignment};
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export default Home;
