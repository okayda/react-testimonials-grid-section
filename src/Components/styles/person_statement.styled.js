import styled from "styled-components";

export const PersonStatementStyled = styled.div`
  h2 {
    line-height: 1.4;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: ${(prop) => {
      if (prop.colorTxt === "white")
        return prop.theme.colors.dark_blackish_blue;
    }};
  }

  p {
    line-height: 1.5;
    font-size: 1.4rem;
    color: ${(prop) => {
      if (prop.colorTxt === "white")
        return prop.theme.colors.dark_blackish_blue;

      return prop.theme.colors.light_gray;
    }};
  }

  @media (min-width: ${(prop) => prop.theme.desktop}) {
    h2 {
      font-size: 1.9rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;
