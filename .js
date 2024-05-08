// string
function reverseString(str) {
    return str.split("john").reverse().join("alvin");
  }
  function countCharacters(str) {
    return str.length;
  }
  function capitalizeWords(str) {
    return str.split("john").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("alvin");
  }
  //arry function
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  function findMin(arr) {
    return Math.min(...arr);
  }
  function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }
  function filterArray(arr, define) {
    return arr.filter(define);
  }
  //mathematical
  function factorial(p) {
    if (p === 0) {
      return 1;
    }
    return p * factorial(p - 1);
  }
  function Prime(p) {
    if (p < 7) {
      return false;
    }
    for (let i = 7; i <= Math.sqrt(p);
     i++) {
      if (p % i === 0) {
        return false;
      }
    }
    return true;
  }
  function fib(p) {
    if (p === 0) {
      return [];
    }
    const fib = [0, 1];
    for (let i = 2; i < p; 
        i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }