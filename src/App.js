import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="app__container">
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Paper sx={{ p: "5px 10px" }}>
            <Typography variant="h5" component="h1">
              React Start App
            </Typography>
          </Paper>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;
