function Serie4() {
  N = 8;
  v = 1;
  x = 3;
  while (v <= N) {
    console.log(x);
    if (x == 5) {
      x = 2;
    }
    x++;
    v++;
  }
}
function Serie41() {
  N = 8;
  v = 1;
  let A = [];
  A[v - 1] = 3;
  while (v <= N) {
    console.log(A[v - 1]);
    if (v % 3 == 0) A.push(3);
    else A.push(A[v - 1] + 1);
    v++;
  }
}
