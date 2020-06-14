import React, { useCallback, useEffect, useState } from "react";
import { GridInterface } from "interfaces/Board";
import BoardContext from "./contexts/Board";
import {
  load,
  save,
  generateData as randomGrid,
  zeroesGrid,
  toBinary,
  fromBinary,
} from "helpers";

interface Props {
  children: React.ReactChild;
}

const LS_DATA = "data";

export function Board({ children }: Props) {
  const [data, setData] = useState<GridInterface>(zeroesGrid());

  useEffect(() => {
    const ls = load(LS_DATA);
    if (!ls) {
      const randomness = randomGrid();

      save(LS_DATA, toBinary(randomness));
      setData(randomness);
    } else {
      setData(fromBinary(ls) as GridInterface);
    }
  }, []);

  const check = useCallback(
    (x: number, y: number) => {
      data[x][y] = 1;
      setData(data);
    },
    [data]
  );

  const uncheck = useCallback(
    (x: number, y: number) => {
      data[x][y] = 0;
      setData(data);
    },
    [data]
  );

  const toggle = useCallback(
    (x: number, y: number) => (data[x][y] ? uncheck(x, y) : check(x, y)),
    [data, check, uncheck]
  );

  return (
    <BoardContext.Provider value={{ data, check, uncheck, toggle }}>
      {children}
    </BoardContext.Provider>
  );
}
