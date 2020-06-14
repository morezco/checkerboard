import styled from "styled-components";

interface Props {
  checked: number;
  row: number;
  column: number;
}

export const Tile = styled.div<Props>`
  width: 100%;
  height: 100%;

  background-color: ${({ checked }) => (checked ? "black" : "white")};

  grid-column-start: ${({ column }) => column};
  grid-column-end: ${({ column }) => column + 1};
  grid-row-start: ${({ row }) => row};
  grid-row-end: ${({ row }) => row + 1};
`;
