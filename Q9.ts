function isPrime(number: number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // It's not a prime number
    }
  }

  return true; // It's a prime number
}

// Example usage:
const exampleNumber = 30;
if (isPrime(exampleNumber)) {
  console.log(`${exampleNumber} is a prime number.`);
} else {
  console.log(`${exampleNumber} is not a prime number.`);
}
