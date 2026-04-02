// Simple calculator with an intentional bug: division doesn't check for zero
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

// BUG: no zero-division guard
export function divide(a: number, b: number): number {
  return a / b;
}

// BUG: hardcoded magic number — should be a named constant
export function isAdult(age: number): boolean {
  return age >= 18;
}
