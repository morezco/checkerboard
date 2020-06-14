import React, { useContext } from "react";
import { BoardContext as Board } from "controller/contexts";

import { Tile as Element } from "./styles";

interface Props {
  row: number;
  column: number;
}

export function Tile({ row, column }: Props) {
  const { data, toggle } = useContext(Board);

  return (
    <Element
      checked={data[row][column]}
      row={row}
      column={column}
      onClick={() => toggle(row, column)}
    />
  );
}
