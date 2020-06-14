import { b, GridInterface } from "interfaces/Board";

type Matrix<T> = Array<Array<T>>;

const r = (): b => Number(Math.random() > 0.5) as b;

export const generateData = (): GridInterface => [
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
];

export const zeroesGrid = (): GridInterface => [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export const toBinary = (matrix: GridInterface) =>
  matrix.map((row: Array<b>) => row.join("")).join("");

export const toMatrix = (binary: string) => {
  const result: Matrix<b> = [];

  binary = binary.replace(/ /g, "");

  if (binary.length % 13) {
    throw new Error("Binary length is not divisible by 13");
  }

  while (binary) {
    result.push(
      binary
        .substring(0, 13)
        .split("")
        .map((x: string) => Number(x) as b)
    );
    binary = binary.substring(13);
  }

  return result;
};
