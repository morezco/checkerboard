export function save(key: string, data: any) {
  if (typeof data !== "string") {
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    localStorage.setItem(key, data);
  }
}
