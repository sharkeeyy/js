function fillArray(matrix, array) {
  let currentI = 0;
  let currentJ = 0;
  let counter = 0;
  let minI = 1;
  let minJ = 0;
  let maxI = matrix.length - 1;
  let maxJ = matrix[0].length - 1;
  let placeCount = matrix.length * matrix[0].length;
  let direction = 'E';
  
  let turn = new Map();
  turn.set('N', 'E');
  turn.set('E', 'S');
  turn.set('S', 'W');
  turn.set('W', 'N');
  
  let finishMarker = (placeCount > array.length) ? array.length : placeCount;
  
  while (counter < finishMarker) {
    
    matrix[currentI][currentJ] = array[counter];
      
    counter += 1;
    
    switch (direction) {
      case 'N': 
        if (currentI == minI) {
          minI += 1;
          direction = turn.get(direction);
          currentJ += 1;
        } else {
          currentI -= 1;
        }
        break;
      case 'E': 
        if (currentJ == maxJ) {
          maxJ -= 1;
          direction = turn.get(direction);
          currentI += 1;
        } else {
          currentJ += 1;
        }
        break;
      case 'S': 
        if (currentI == maxI) {
          maxI -= 1;
          direction = turn.get(direction);
          currentJ -= 1;
        } else {
          currentI += 1;
        }
        break;
      case 'W': 
        if (currentJ == minJ) {
          minJ += 1;
          direction = turn.get(direction);
          currentI -= 1;
        } else {
          currentJ -= 1;
        }
        break;
    }
    
    
    // console.log(`CurrentI = ${currentI}, CurrentJ = ${currentJ}, Direction = ${direction}, item = ${array[counter]}, minI = ${minI}, maxI = ${maxI}, minJ = ${minJ}, maxJ = ${maxJ}`);
    
  }
  
  return matrix;  
}

let test = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

let testArray = (new Array(50)).fill(0).map((item, index) => index + 10);

console.log(fillArray(test, testArray));

