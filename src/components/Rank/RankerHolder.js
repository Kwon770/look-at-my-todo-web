import React from "react";
import styled from "styled-components";
import {
  Badge,
  Avatar,
  CardHeader,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ToggleButton from "../Todo/ToggleButton";
import Title from "../Todo/Title";
import TimeData from "../Todo/TimeData";
import Theme from "../../style/Theme";
import AchivementChip from "./AchivementChip";
import ScoreChip from "./ScoreChip";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: -1,
      left: -1,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const RankerHolder = ({ grade, ranker, rankerTodo }) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
          >
            <Avatar src={ranker.profile} />
          </StyledBadge>
        }
        title={ranker.name}
        subheader={ranker.email}
      />
      <List>
        <ListItem>
          <CenterHolder>
            <AchivementChip grade={grade} />
            <ScoreChip score={ranker.score} />
          </CenterHolder>
        </ListItem>
        {rankerTodo.map((todo, idx) => (
          <ListItem
            key={idx}
            style={{
              borderBottomWidth: idx + 1 !== rankerTodo.length ? 1 : 0,
              borderBottomStyle: "solid",
              borderBottomColor: Theme.panelBg3Color,
            }}
          >
            <ListItemAvatar>
              <ToggleButton completed={todo.isCompleted} immuatable={true} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Title completed={todo.isCompleted} title={todo.title} />
              }
              secondary={
                <TimeData
                  closingDate={todo.closingDate}
                  closingTime={todo.closingTime}
                />
              }
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

const CenterHolder = styled.div`
  ${(props) => props.theme.RowCenterAlignment}
  ${(props) => props.theme.Page}
`;

export default RankerHolder;
