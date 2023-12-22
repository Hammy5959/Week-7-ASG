`Create a function that takes a positive integer as parameter and uses a for loop 
to calculate and return the factorial of that number.`;

function factorialThatNumber(num: number) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

let result = factorialThatNumber(5);
console.log(result);
