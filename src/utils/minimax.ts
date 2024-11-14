type Player = "X" | "O" | null;
// Định nghĩa kiểu Player, có thể là "X", "O" hoặc null (chưa có người đánh vào ô đó)

// Hàm lấy nước đi ngẫu nhiên cho mức độ dễ
export function getRandomMove(board: Player[]): number {
  const emptySquares = board
    .map((value, index) => (value === null ? index : null))
    .filter((val) => val !== null) as number[];

  if (emptySquares.length === 0) return -1;

  const randomIndex = Math.floor(Math.random() * emptySquares.length);
  return emptySquares[randomIndex];
}

// Hàm lấy nước đi cho mức độ trung bình
export function getMediumAIMove(board: Player[]): number {
  // Trước tiên, kiểm tra xem AI có thể thắng ở nước đi tiếp theo không
  const winningMove = findWinningMove(board, "O");
  if (winningMove !== -1) return winningMove;

  // Nếu không, kiểm tra xem người chơi có thể thắng ở nước đi tiếp theo không và chặn lại
  const blockingMove = findWinningMove(board, "X");
  if (blockingMove !== -1) return blockingMove;

  // Nếu không, chọn nước đi ngẫu nhiên
  return getRandomMove(board);
}

// Hàm tìm nước đi có thể thắng
function findWinningMove(board: Player[], player: Player): number {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      board[i] = player;
      if (evaluateBoard(board) === (player === "X" ? 1 : -1)) {
        board[i] = null;
        return i;
      }
      board[i] = null;
    }
  }
  return -1;
}

// Hàm đánh giá trạng thái cuối cùng
function evaluateBoard(board: Player[]): number {
  // Định nghĩa các tổ hợp chiến thắng có thể có trên bảng Tic Tac Toe
  const lines = [
    [0, 1, 2], // Hàng ngang đầu tiên
    [3, 4, 5], // Hàng ngang thứ hai
    [6, 7, 8], // Hàng ngang thứ ba
    [0, 3, 6], // Cột dọc đầu tiên
    [1, 4, 7], // Cột dọc thứ hai
    [2, 5, 8], // Cột dọc thứ ba
    [0, 4, 8], // Đường chéo từ trên trái xuống dưới phải
    [2, 4, 6], // Đường chéo từ trên phải xuống dưới trái
  ];

  // Duyệt qua từng tổ hợp chiến thắng và kiểm tra xem có ai thắng không
  for (const [a, b, c] of lines) {
    // Nếu cả ba ô trong tổ hợp đều không null và có cùng giá trị, tức là có người thắng
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] === "X" ? 1 : -1; // Nếu X thắng, trả về 1; nếu O thắng, trả về -1
    }
  }

  return 0; // Nếu không ai thắng và trò chơi chưa kết thúc (có ô trống), trả về 0
}

// Hàm minimax
function minimax(
  board: Player[], // Bảng trạng thái hiện tại
  depth: number, // Độ sâu của cây tìm kiếm
  isMaximizing: boolean // Xác định nếu đây là lượt của Maximizer (người chơi X)
): number {
  const score = evaluateBoard(board); // Đánh giá trạng thái hiện tại
  // Nếu đã có người thắng hoặc hết ô trống, trả về điểm số hiện tại
  if (score === 1 || score === -1 || !board.includes(null)) return score;

  // Nếu là lượt Maximizer (người chơi X)
  if (isMaximizing) {
    let bestScore = -Infinity; // Khởi tạo điểm số tốt nhất là nhỏ nhất có thể
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        // Kiểm tra ô trống
        board[i] = "X"; // Thử đặt X vào ô trống
        // Gọi đệ quy minimax cho lượt Minimizer, tính toán điểm số và cập nhật bestScore
        bestScore = Math.max(bestScore, minimax(board, depth + 1, false));
        board[i] = null; // Trả ô về trạng thái trống
      }
    }
    return bestScore; // Trả về điểm số tốt nhất có thể đạt được cho Maximizer
  } else {
    // Nếu là lượt Minimizer (người chơi O)
    let bestScore = Infinity; // Khởi tạo điểm số tốt nhất là lớn nhất có thể
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        // Kiểm tra ô trống
        board[i] = "O"; // Thử đặt O vào ô trống
        // Gọi đệ quy minimax cho lượt Maximizer, tính toán điểm số và cập nhật bestScore
        bestScore = Math.min(bestScore, minimax(board, depth + 1, true));
        board[i] = null; // Trả ô về trạng thái trống
      }
    }
    return bestScore; // Trả về điểm số tốt nhất có thể đạt được cho Minimizer
  }
}

// Hàm tìm nước đi tốt nhất cho AI
export function findBestMove(board: Player[]): number {
  let bestScore = Infinity; // Khởi tạo bestScore là lớn nhất (vì AI là Minimizer)
  let move = -1; // Biến lưu chỉ số của nước đi tốt nhất

  // Duyệt qua tất cả các ô
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      // Nếu ô đang trống
      board[i] = "O"; // Thử đặt O vào ô trống
      const score = minimax(board, 0, true); // Gọi hàm minimax để tính điểm cho nước đi này
      console.log(i, score);
      board[i] = null; // Trả ô về trạng thái trống

      // Nếu điểm của nước đi này nhỏ hơn bestScore, cập nhật bestScore và nước đi tốt nhất
      if (score < bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  return move; // Trả về chỉ số của nước đi tốt nhất cho AI
}
