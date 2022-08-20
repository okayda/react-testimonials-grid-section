import styled from "styled-components";

export const ContainerStyled = styled.div`
  margin: 0 auto;
  max-width: 76.8rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: ${(prop) => prop.theme.desktop}) {
    margin: 0;
    max-width: 130rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
