export class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.success = false;
    this.statusCode = statusCode;
    this.message = message;
  }
}
