// Prefix local files with the base path (set for the GitHub Pages build).
export const asset = (path: string) =>
  path.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}` : path
