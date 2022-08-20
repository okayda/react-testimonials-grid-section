import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "./Components/styles/global.styled";
import { SectionStyled } from "./Components/styles/section.styled";
import Content from "./Components/Content";

const theme = {
  colors: {
    // Primary
    moderate_violet: "hsl(263, 55%, 52%)",
    dark_grayish_blue: "hsl(217, 19%, 35%)",
    dark_blackish_blue: "hsl(219, 29%, 14%)",
    white: "hsl(0, 0%, 100%)",

    // Neutral
    light_gray: "hsl(0, 0%, 81%)",
    light_grayish_blue: "hsl(210, 46%, 95%)",
  },

  desktop: "81.25em",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyled />
        <SectionStyled>
          <Content />
        </SectionStyled>
      </>
    </ThemeProvider>
  );
}

export default App;
