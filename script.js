// Task 2
function Fibonacci(num) {
    if (num<=0){
        return 0;
    } else if (num===1){
        return 1;
    } else {
        return Fibonacci(num-1)+Fibonacci(num-2); 
    }
}
console.log(Fibonacci(10))


// Task 3

function filter (array, handler) {
    if(!Array.isArray(array) || typeof handler !== 'function'){
        throw new Error("Перевірте вхідні аргументи")
    }

    const filteredArray = [];

    for(let i = 0; i < array.length; i++){
        if(handler(array[i])){
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(number) {
  return number % 2 === 0;
}

const evenNumbers = filter(numbers, isEven);
console.log(evenNumbers);

// Task 4-5

function pow(number,power){
    return number**power;
}
console.log(pow(5,2));

function powList(array,power){
    return result = array.map((number) => pow(number,power));  
}

let array = [3,4,5,6];
let power = 2;
console.log(powList(array,power));

// Task 6

function powAndFilter(array,power,minValue){
    return filter(powList(array,power), (number) => number >= minValue);
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
power = 2;
let minValue = 50;
console.log(powAndFilter(numbers, power, minValue));

// Task 7

function sum(handler) {
    return function calc() {
      const array = handler();
      return array.reduce((acc, current) => acc + current, 0);
    };
  }
  
  function handler() {
    return [1, 2, 3, 4, 5, 6];
  }
  
  const calcSum = sum(handler);
  
  console.log(calcSum()); 