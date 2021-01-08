const pallete = {
  baseBgColor: "#5549E4",
  baseFontColor: "#FFFFFF",
  panelBgColor: "#FFFFFF",
  panelFontColor: "#515151",
  panelFont2Color: "#8F8DA5",
  panelBg2Color: "#BFBFBF",
  deepBgColor: "#0C1C55",
  hlColor: "#FF6367",
  hl2Color: "#0F94FA",
};

const ui = {
  PageHolder: `
  width: 100%;
  height: 100%;
  `,
  CenterAlignment: `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `,

  // RoundBox: ``,
};

export default { ...pallete, ...ui };
