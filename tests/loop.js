var t1 = Date.now()
var str = '';
for (var i = 0; i < N; i++) {
  str += 'a';
}
var t2 = Date.now()
console.log(t2 - t1);