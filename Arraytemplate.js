const useArr = ['Ironman', 'Love', 'Dog', 1 , true, 'Saurabh'];
console.log(useArr.length);
console.log(useArr[2]);
console.log(`We currently have ${useArr.length} superheroes that are named as ${useArr}`);

// About three main ARRAYS
number = ['one', 'two', 'three','four','five'];

// shift, unshift - For starting
number.shift();
console.log(number);
number.unshift('Something');
console.log(number);
// push , pop - For end one
number.pop();
console.log(number);
number.push('five');
console.log(number);
// slice() - For middle one

number.splice(1,2,'Love');
console.log(number);