import styled from "styled-components";

export const PersonStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  img {
    border-radius: 100%;
    width: 52px;
    height: 52px;
    background-color: ${(prop) => prop.theme.colors.light_gray};
    padding: 0.1rem;
  }

  .person {
    display: flex;
    flex-direction: column;

    &__name {
      color: ${(prop) => {
        if (prop.colorTxt === "white")
          return prop.theme.colors.dark_blackish_blue;
      }};
      font-size: 1.4rem;
      margin-bottom: 0.4rem;
    }

    &__validity {
      font-size: 1.2rem;
      color: ${(prop) => prop.theme.colors.light_gray};
    }
  }
`;
