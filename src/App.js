import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import IndexPage from "./Pages/IndexPage";
import Theme from "./Themes/theme";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <IndexPage />
      </ThemeProvider>
    </div>
  );
}
