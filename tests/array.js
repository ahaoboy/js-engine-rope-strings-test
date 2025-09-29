const t1 = Date.now()

let str = new Array(N)
for (let i = 0; i < N; i++) {
  str[i] = 'a';
}
str = str.join("")

const t2 = Date.now()
console.log(t2 - t1);