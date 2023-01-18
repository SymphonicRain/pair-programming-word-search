const wordSearch = (letters, word) => {
    if (!word) return false; 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    let transposed = transpose(letters);
    const verticalJoin = transposed.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;

}

const transpose = function (matrix) {
    let output = [];
  
    for (let x of matrix[0]) {
      output.push([]);
    }
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        output[j].push(matrix[i][j]);
      }
    }
    return (output);
  };

module.exports = wordSearch