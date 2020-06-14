import React, { useContext } from "react";
import { BoardContext as Board } from "controller/contexts";
import { Container } from "./styles";
import { Tile } from "./Tile/Tile";

export function Grid() {
  const { data } = useContext(Board);

  const Tiles = () => {};

  return (
    <Container>
      <></>
    </Container>
  );
}
