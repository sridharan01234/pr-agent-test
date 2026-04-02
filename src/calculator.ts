const ADULT_AGE_THRESHOLD = 18;

/**
 * Multiplies two numbers.
 * @param a - The first number
 * @param b - The second number
 * @returns The product of a and b
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Calculates the factorial of a non-negative integer.
 * @param n - The number to calculate factorial for
 * @returns The factorial of n
 * @throws {Error} If n is negative
 */
export function factorial(n: number): number {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Determines if a person is an adult based on age.
 * @param age - The age of the person
 * @returns True if age is greater than or equal to ADULT_AGE_THRESHOLD, false otherwise
 */
export function isAdult(age: number): boolean {
  return age >= ADULT_AGE_THRESHOLD;
}
