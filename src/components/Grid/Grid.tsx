import React, { useContext } from "react";
import { BoardContext as Board } from "controller/contexts";
import { Container } from "./styles";

export function Grid() {
  const { data, check, uncheck } = useContext(Board);

  return (
    <Container>
      <></>
    </Container>
  );
}
