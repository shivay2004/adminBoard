// theme/theme.js
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#1976d2" },
          background: {
            default: "#f0f2f5",
            paper: "#ffffff",
          },
          text: {
            primary: "#344767",
            secondary: "#7B7F99",
          },
        }
      : {
          primary: { main: "#90caf9" },
          background: {
            default: "#1A2035",
            paper: "#202940",
          },
          text: {
            primary: "#ffffff",
            secondary: "#7B7F99",
          },
        }),
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
