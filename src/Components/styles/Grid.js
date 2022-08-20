import styled from "styled-components";

export const Grid = styled.figure`
  padding: 2.6rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  border-radius: 9px;
  color: ${(prop) => prop.theme.colors.white};
  background-color: ${(prop) => {
    const color = prop.theme.colors;
    let value;

    if (prop.bg_color === "violet") value = color.moderate_violet;
    if (prop.bg_color === "dark_grayish_blue") value = color.dark_grayish_blue;
    if (prop.bg_color === "white") value = color.white;
    if (prop.bg_color === "dark_blackish_blue")
      value = color.dark_blackish_blue;

    return value;
  }};

  @media (min-width: ${(prop) => prop.theme.desktop}) {
    padding: 1.6rem 3rem;

    grid-column: ${(prop) => {
      let value;
      if (prop.position === "purple_grid") value = "1 / 3";
      if (prop.position === "gray_grid") value = "3 / 4";
      if (prop.position === "black_grid") value = "2 / 4";
      if (prop.position === "white-second_grid") value = "4 / 5";
      if (prop.position === "white-first_grid") value = "1 / 2";

      return value;
    }};

    grid-row: ${(prop) => {
      let value;
      if (prop.position === "white-second_grid") value = "1 / 3";
      if (prop.position === "white-first_grid") value = "2 / 3";

      return value;
    }};
  }
`;
