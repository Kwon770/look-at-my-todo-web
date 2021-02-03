import React from "react";
import { Chip } from "@material-ui/core";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const AchivementChip = ({ score }) => {
  return (
    <Chip
      avatar={<IoCheckmarkDoneCircleSharp />}
      label={score}
      color="primary"
      style={{ marginRight: 10 }}
    />
  );
};

export default AchivementChip;
