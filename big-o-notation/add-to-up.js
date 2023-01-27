// example 1
function addToUp(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

console.time(addToUp(6));
console.log(addToUp(6));
console.timeEnd(addToUp(6))

// example 2
function addToUp2(n) {
  return n * (n + 1) / 2;
}

console.time(addToUp2(6));
console.log(addToUp2(6));
console.timeEnd(addToUp2(6))

/**
  question

  1) 더 빠른 코드 -> 중점적으로 코드 작성.
  2) 더 적은 메모리 사용
  3) 가독성
*/