const a = ['foo', 'bar', 'baz', 'qux'];

console.log(a.keys());
console.log(a.values());
console.log(a.entries());

for (const [idx, ele] of a.entries()) {
  console.log(`${idx} - ${ele}`);
}