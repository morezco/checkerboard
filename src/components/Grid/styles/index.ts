import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(10, 1fr);

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(9, 1fr);
  }
`;
