function camelize(string) {
    arr = string.split('-');

    arr = arr.map((item, index) => {
        return index == 0 ? item : item[0].toUpperCase() + item.slice(1);
    }); 

    return arr.join('');
}

function camelizeChain(str) {
    return str
      .split('-')
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
}

const generateQueueArray = (count) => {
    return (new Array(count)).fill(1).map((item, index) => index + 1);
}

/////****  Foo Bar  ****/////

function madeFooBar(array) {
    for (let i = 0; i < array.length; i++) {
        if (!(array[i] % 3) && !(array[i] % 5)) {
            array[i] = 'foobar';
        } else if (!(array[i] % 3)) {
            array[i] = 'foo';    
        } else if (!(array[i] % 5)) {
            array[i] = 'bar';    
        }
    }
    return array;
}

const madeFooBarArrow = array => {
    array.map((item) => 
        !(item % 3) && !(item % 5) ? 'foobar' : 
        !(item % 3) ? 'foo' :
        !(item % 5) ? 'bar' : item 
    );
} 

function filterRange(array, a, b) {
    return array.filter(item => (item > a) && (item < b));
}

function filterRangeInPlace(array, a, b) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= a || array[i] >= b) {
            array.splice(i, 1);
            i -= 1;
        }
    };    
}

const compareReverse = (a, b) => b - a;

const copySorted = array => array.slice().sort();

function sortByAge(array){
    return array.sort((a, b) => a.age - b.age);
}

/////****  Strings  ****/////

function ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function checkSpam(string) {
    return (string.toLowerCase().includes('xxx')) || (string.toLowerCase().includes('viagra'));
}

function truncate(str, maxlength) {
    if (str.length <= maxlength) return str;
    else {
      return str.slice(0, maxlength) + '...';
    }
}

function extractCurrencyValue(string) {
    return +string.slice(1);
}