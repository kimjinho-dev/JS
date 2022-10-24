const inputs = [
  [3, 10, 5, [1, 3, 5, 7, 9]],    // 3
  [3, 10, 5, [1, 3, 7, 8, 9]],    // 0
  [5, 20, 5, [4, 7, 9, 14, 17]],  // 4
]

// solution 함수 완성
function solution(K, N, M, chargers) {
  // K = 이동거리, N = 종점 정류장 번호, M = 설치된 충전기 개수
  let now_location = 0  // 현재 위치
  let cnt = 0  // 이동 횟수
  while (true) {
    console.log(now_location, cnt)
    let fail_cnt = 0
    for (let i = K; i > 0; i--) {
      let new_location = now_location + i
      if (new_location >= N) {
        return console.log('답', cnt)
      }
      let val = chargers.some((idx) => idx === new_location)
      if (val === true) {
        now_location = new_location
        cnt += 1
        break
      } else { fail_cnt += 1 }
    }
    console.log(fail_cnt)

    if (fail_cnt == K) {
      console.log('답', 0)
      break
    }

  }
}

for (const input of inputs) {
  solution(...input)
}