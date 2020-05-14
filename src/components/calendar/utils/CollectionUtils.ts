export function createRange(start: number, end: number) {
  return Array.from(
    { length: end - start + 1 },
    (x: number, i: number) => i + start
  )
}
