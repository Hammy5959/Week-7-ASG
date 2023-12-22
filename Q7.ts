`Create a function that takes an array of numbers as parameter. Use a for loop to
 calculate and return the sum of all the numbers in the array.`;

function sumArray(arr: number[]) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
let numbers: number[] = [2, 4, 7, 8, 9, 5];
console.log(sumArray(numbers));
