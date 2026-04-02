const ADULT_AGE_THRESHOLD = 18;

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new RangeError('Division by zero is not allowed.');
  }
  return a / b;
}

export function isAdult(age: number): boolean {
  return age >= ADULT_AGE_THRESHOLD;
}
