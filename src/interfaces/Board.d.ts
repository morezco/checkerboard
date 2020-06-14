export type bit = 0 | 1;
type b = bit;

export type GridInterface = [
  [b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b]
];

export interface BoardContext {
  data: GridInterface;
  check: (x: number, y: number) => void;
  uncheck: (x: number, y: number) => void;
  toggle: (x: number, y: number) => void;
}

export default BoardContext;
