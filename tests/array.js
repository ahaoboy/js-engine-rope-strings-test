var t1 = Date.now()

var str = new Array(N)
for (var i = 0; i < N; i++) {
  str[i] = 'a';
}
str = str.join("")

var t2 = Date.now()
print(t2 - t1);