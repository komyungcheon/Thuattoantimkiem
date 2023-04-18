function matrixElementsSum(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0 && i < matrix.length - 1) {
                matrix[i + 1][j] = 0;
            }
            sum += matrix[i][j];
        }
    }
    return sum;
}
var matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
console.log(matrixElementsSum(matrix));
