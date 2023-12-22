`Create a function that takes an array, an index, and a value as parameters. Inside
 the function, use the splice method to insert the value at the specified index in 
 the array. Return the modified array.`;

let arr: string[] = ["apple", "banana", "orange"];
console.log("array contents:", arr);

function insertValueAtIndex(
  array: string[],
  index: number,
  value: string
): string[] {
  array.splice(index, 0, value);
  console.log(`Inserted ${value} at index ${index}. Array contents:`, array);
  return array;
}

insertValueAtIndex(arr, 3, "grapes");
