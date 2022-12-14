/// elbrus_bootcamp ->>>> elbrusBootcamp
//// abc_def_ghi ->>>> abcDefGhi

// const camel = (string) => {
//   let array = string.split('_');
//   let result = array[0];
//   for (let i = 1; i < array.length; i++) {
//     result += array[i][0].toUpperCase() + array[i].slice(1);
//   }

//   return result;
// }

// console.log(camel('elbrus_bootcamp'));
// console.log(camel('abc_def_ghi'));

function makeSummer(n) {
  return function (a) {
    return n + a;
  }
}


let sumTen = new makeSummer(10);
let sumHundred = new makeSummer(100);



