// Source: https://stackoverflow.com/questions/2519818/create-a-permalink-with-javascript
export function usePermalink(str: string) {
  return str
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-*|-*$/g, "")
    .toLowerCase();
}
