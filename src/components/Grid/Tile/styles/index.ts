import styled from "styled-components";

interface Props {
  checked: number;
  row: number;
  column: number;
}

export const Tile = styled.div<Props>`
  width: calc(100 / 13) vw;
  height: 10vh;

  transition: all 0.6s ease-in-out;
  cursor: pointer;

  background-color: ${({ checked }) => (checked ? "black" : "white")};

  grid-column-start: ${({ column }) => column + 1};
  grid-column-end: ${({ column }) => column + 1};
  grid-row-start: ${({ row }) => row + 1};
  grid-row-end: ${({ row }) => row + 1};
`;
