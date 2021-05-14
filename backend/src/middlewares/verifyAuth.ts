import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfif from '../config/auth';

export default function verifyAuth(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('User not authenticate');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfif.jwt.secret);

    return next();
  } catch {
    throw new Error('Invalid token!');
  }
}
