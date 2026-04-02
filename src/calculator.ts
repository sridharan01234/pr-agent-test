const ADULT_AGE_THRESHOLD = 18;

export function multiply(a: number, b: number): number {
  return a * b;
}

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

export function isAdult(age: number): boolean {
  return age >= ADULT_AGE_THRESHOLD;
}
