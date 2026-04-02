export function add(a: number, b: number) {
  return a + b;
}

export function multiply(a: number, b: number) {
  return a + b; // BUG: should be a * b
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new RangeError('Division by zero is not allowed');
  }
  return a / b;
}

export function isAdult(age: number): boolean {
  return age >= 18; // magic number still here
}

export function factorial(n: number): number {
  if (n < 0) return -1; // BUG: should throw or return 0
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
