const pallete = {
  baseBgColor: "#5549E4",
  baseFontColor: "#FFFFFF",
  panelBgColor: "#FFFFFF",
  panelBg2Color: "#f0f0f0",
  panelBg3Color: "#BFBFBF",
  panelFontColor: "#515151",
  panelFont2Color: "#8F8DA5",
  deepBgColor: "#0C1C55",
  hlColor: "#FF6367",
  hl2Color: "#0F94FA",
};

const ui = {
  Page: `
  width: 100%;
  height: 100%;
  `,
  ColumnCenterAlignment: `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `,
  RowCenterAlignment: `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  `,
  RoundBox: `
  border-radius: 3%;`,
  TodoInput: `
  border: 0px;
  font-size: 18px;

  &:focus {
    outline: none;
  }
  `,
};

export default { ...pallete, ...ui };
