const t1 = Date.now()
let str = '';
for (let i = 0; i < 1000_000; i++) {
  str += 'a';
}
const t2 = Date.now()
console.log(t2 - t1);