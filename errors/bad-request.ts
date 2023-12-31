import CustomApiError from './custom-error.js';
import { StatusCodes } from 'http-status-codes';

class BadRequestError extends CustomApiError {
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;