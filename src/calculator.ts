const ADULT_AGE_THRESHOLD = 18;

/**
 * Adds two numbers.
 * @param a - The first number
 * @param b - The second number
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

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
 * Divides one number by another.
 * @param a - The dividend
 * @param b - The divisor
 * @returns The quotient of a divided by b
 * @throws {RangeError} When b is zero
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new RangeError('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Checks if the given age qualifies as an adult.
 * @param age - The age to check
 * @returns True if age is greater than or equal to the adult age threshold, false otherwise
 */
export function isAdult(age: number): boolean {
  return age >= ADULT_AGE_THRESHOLD;
}

/**
 * Calculates the factorial of a non-negative integer.
 * @param n - The number to calculate factorial for
 * @returns The factorial of n
 * @throws {RangeError} When n is negative
 */
export function factorial(n: number): number {
  if (n < 0) {
    throw new RangeError('Factorial is not defined for negative numbers');
  }
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
