export function load(key: string) {
  const result = localStorage.getItem(key);

  try {
    return key === "data" ? result : result && JSON.parse(result);
  } catch {
    return result;
  }
}
