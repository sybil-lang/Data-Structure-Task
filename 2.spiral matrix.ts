function printSpiralMatrix(N: number): void {
  if (N <= 0) {
      console.log("Invalid input. Please provide a positive integer.");
      return;
  }

  const matrix: number[][] = new Array(N).fill(0).map(() => new Array(N).fill(0));

  let value: number = N * N;
  let top: number = 0, bottom: number = N - 1, left: number = 0, right: number = N - 1;

  while (top <= bottom && left <= right) {
      for (let i = bottom; i >= top; i--) {
          matrix[i][right] = value--;
      }
      right--;

      for (let i = right; i >= left; i--) {
          matrix[top][i] = value--;
      }
      top++;

      for (let i = top; i <= bottom; i++) {
          matrix[i][left] = value--;
      }
      left++;

      for (let i = left; i <= right; i++) {
          matrix[bottom][i] = value--;
      }
      bottom--;
  }

  // Print the matrix
  for (let i = 0; i < N; i++) {
      console.log(matrix[i].join(" "));
  }
}

// Example usage:
const N: number = 5;
printSpiralMatrix(N);
