function solution(board, moves) {
  var answer = 0;
  N = board.length
  const stack = []
  for (move of moves) {
    for (let i = 0; i < N; i++) {
      if (board[i][move - 1] !== 0) {
        if (board[i][move - 1] === stack[stack.length - 1]) {
          stack.pop()
          answer += 2
        } else {
          stack.push(board[i][move - 1])
        }
        board[i][move - 1] = 0
        break
      }
    }
  }
  return answer;
}