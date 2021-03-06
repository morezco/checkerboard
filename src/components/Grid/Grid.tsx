import React, { useContext, useMemo } from "react";
import { BoardContext as Board } from "controller/contexts";
import { Container } from "./styles";
import { Tile } from "./Tile/Tile";

export function Grid() {
  const { data } = useContext(Board);

  return (
    <Container>
      {useMemo(
        (): Array<JSX.Element> =>
          data
            .map((row, i) => row.map((bit, j) => <Tile row={i} column={j} />))
            .flat(),
        [data]
      )}
    </Container>
  );
}
