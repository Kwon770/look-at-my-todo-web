import React from "react";
import { Chip } from "@material-ui/core";
import { AiFillCrown } from "react-icons/ai";

const AchivementChip = ({ grade }) => {
  if (grade === 0) {
    return (
      <Chip
        avatar={<AiFillCrown />}
        label={"Top 1 Ranker"}
        color="secondary"
        style={{ marginRight: 10 }}
      />
    );
  } else if (grade === 1) {
    return (
      <Chip
        avatar={<AiFillCrown />}
        label={"Top 2 Ranker"}
        color="secondary"
        style={{ marginRight: 10 }}
      />
    );
  } else if (grade === 2) {
    return (
      <Chip
        avatar={<AiFillCrown />}
        label={"Top 3 Ranker"}
        color="secondary"
        style={{ marginRight: 10 }}
      />
    );
  }
};

export default AchivementChip;
