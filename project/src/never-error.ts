export class NeverError extends Error {
  constructor(value: never) {
    super(`Unreachable value: ${value}`);
  }
}
