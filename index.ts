export function switcheroo(x: string): string {
  let withoutA = x.replace(/a/g, "z");
  let withoutB = withoutA.replace(/b/g, "a");
  let reverse = withoutB.replace(/z/g, "b");
  return reverse;
}
