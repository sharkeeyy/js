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

const madeFooBarArrow = array => 
    array.map((item) => 
        !(item % 3) && !(item % 5) ? 'foobar' : 
        !(item % 3) ? 'foo' :
        !(item % 5) ? 'bar' : item 
    );

console.log(madeFooBar(generateQueueArray(20)));

